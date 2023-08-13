import pool from "../db/database";
import { Stats } from "../modele/stats";
import { user_badge, user_badges } from "../modele/user_badges";
import { FormatedSqlBadge, Badge } from "../modele/badge";
  

class GamificationRepository { 
    
    // Fonction qui recupere les info de tous les badges ainsi que la progression actuelle d'un utilisateur 
    // Elle utilise les fonctions getBadgesStatsByUser et updateUserBadges
    static async getAllBadgesWithUserBadges(user_id: Number): Promise<{badges: Badge[], user_badges:user_badges}> {
        try {
            const userStats = await this.getBadgesStatsByUser(user_id);
            const allBadgesQuery = `
                SELECT
                    badge_id,
                    name,
                    description,
                    image,
                    ARRAY(SELECT json_build_object('level', s.level, 'requirement', s.requirement) FROM unnest(steps) s) as steps
                FROM
                    badges;
            `;

            const allBadges = await pool.query(allBadgesQuery);

            await this.updateUserBadges(user_id, allBadges.rows, userStats);
        
            const userBadgesQuery = `
                SELECT
                    user_id,
                    num_logins,
                    last_login_date,
                    ARRAY(SELECT json_build_object('badge_id', b.badge_id, 'step', ud.step, 'date_earned', ud.date_earned) FROM unnest(badges) ud LEFT JOIN badges b ON ud.badge_id = b.badge_id) as badges
                FROM
                    user_badges 
                WHERE
                    user_id = $1;
            `;
            const userBadges = await pool.query(userBadgesQuery, [user_id]);
            const response = { badges: allBadges.rows, user_badges: userBadges.rows[0] }
            return response
        } catch (error) {
            throw new Error(`Unable to get all badges: ${error}`);
        }
    }

    // Fonction qui creer une nouvelle ligne dans la table badges
    // Elle va aussi ajouter une nouvelle progression pour ce badge a tous les users (dans la table user_badges)
    static async createBadge(badge : Badge): Promise<Badge> {
        try {

            let query = `
                INSERT INTO badges (name, description, image, steps)
                VALUES ($1, $2, $3, $4)
                RETURNING badge_id;
            `;
            let formatedStep = "{"
            for (const step of badge.steps) {
                if (step != badge.steps[badge.steps.length - 1]){
                    formatedStep += '"(' + step.level + ', ' + step.requirement + ')", '
                } else {
                    formatedStep += '"(' + step.level + ', ' + step.requirement + ')"}'
                }
            }
            let values = [badge.name, badge.description, badge.image , formatedStep];
            const result = await pool.query(query, values);

            const insertedBadgeId = result.rows[0].badge_id;
            const newBadgeInfo = `(${insertedBadgeId}, 0, 1970-01-01)`;
            query = `
                UPDATE user_badges
                SET badges = badges || ARRAY[$1::badge_data]
                WHERE true;
            `;
            values = [newBadgeInfo];
            await pool.query(query, values);
            badge["badge_id"] = result.rows[0].badge_id
            return badge;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to create badge: ${error}`);
        }
    }

    static async updateBadge(badge : Badge): Promise<Badge> {
        try {

            let query = `
                UPDATE badges
                SET name = $1, description = $2, image = $3, steps = $4
                WHERE badge_id = $5
            `;
            let formatedStep = "{"
            for (const step of badge.steps) {
                if (step != badge.steps[badge.steps.length - 1]){
                    formatedStep += '"(' + step.level + ', ' + step.requirement + ')", '
                } else {
                    formatedStep += '"(' + step.level + ', ' + step.requirement + ')"}'
                }
            }
            let values = [badge.name, badge.description, badge.image , formatedStep, badge.badge_id];
            await pool.query(query, values);
            
            return badge;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to update badge: ${error}`);
        }
    }

    // Fonction qui va update la progression d'un seul badge d'un utilisateur 
    static async updateUserBadge(user_id: Number, user_badges: user_badge): Promise<user_badge[]> {
        try {
            const selectQuery = `
                SELECT badges
                FROM user_badges
                WHERE user_id = $1;
            `;

            const selectResult = await pool.query(selectQuery, [user_id]);

            if (selectResult.rows.length === 0) {
                throw new Error(`User with ID ${user_id} not found`);
            }

            const badgeDataString = selectResult.rows[0].badges;
            const badgeDataArray =  badgeDataString.replace(/[\(\{]/g, '').replace(/\}/g, '').replace(/"/g, '').split("),");

            const updatedBadgesArray = badgeDataArray.map((badgeItem: string) => {
                const [badgeIdPart, stepPart, dateEarnedPart] = badgeItem.split(',');
                const badge_id = parseInt(badgeIdPart);
                const step = parseInt(stepPart);
                const date_earned = dateEarnedPart.substring(0, 10);
                return {
                    badge_id,
                    step,
                    date_earned
                };
            });

            let updatedBadgesDataArray: string[] = [];
            for (let updatedBadge of updatedBadgesArray) {
                if (updatedBadge.badge_id === user_badges.badge_id) {
                    updatedBadge = user_badges
                    const updatedBadgeString = `(${user_badges.badge_id},${user_badges.step},'${user_badges.date_earned}')`;
                    updatedBadgesDataArray.push(updatedBadgeString);
                } else {
                    const existingBadgeString = `(${updatedBadge.badge_id},${updatedBadge.step},'${updatedBadge.date_earned}')`;
                    updatedBadgesDataArray.push(existingBadgeString);
                }
            }

            const updatedBadgesData = updatedBadgesDataArray.join(',');

            const updateQuery = `
                UPDATE user_badges
                SET badges = ARRAY[${updatedBadgesData}]::badge_data[]
                WHERE user_id = $1;
            `;

            const response = await pool.query(updateQuery, [user_id]);
            return updatedBadgesArray;
        } catch (error) {
            console.error(error);
            throw new Error(`Unable to update UserBadge: ${error}`);
        }
    }

    // Fonction qui va effectuer l'enregistrement de la connexion quotidienne pour un utilisateur 
    // Elle retourne true si le dailyLogin a été effectué, false si le daily login avait déjà été fait
    static async dailyLogin(user_id: Number): Promise<Boolean> {
        try {
            const currentDate = new Date();
            const currentDateStr = `${currentDate.getFullYear()}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}`;
            const query = `
                UPDATE user_badges
                SET last_login_date = $1, num_logins = num_logins + 1
                WHERE user_id = $2 AND last_login_date <> $1;
            `;
            const values = [currentDateStr, user_id]
            const result = await pool.query(query, values);
            
            return result.rowCount > 0;
        } catch (error) {
            console.error(error);
            throw new Error(`Unable to do the dailyLogin: ${error}`);
        }
    }

    // Fonction utiliser pour getAllBadgesWithUserBadges
    // Permet d'update la progression de l'utilisateur pour tous ses badges
    // Si c'est un nouvelle utilisateur, cela creer la progression 
    static async updateUserBadges(user_id: Number, allBadges: Badge[] , stats: Stats) {
        try {
            const query = `
                SELECT badges
                FROM user_badges
                WHERE user_id = $1;
            `;

            const poolQueryUserBadges = await pool.query(query, [user_id]);
            let updatedBadgesArray;
            if (poolQueryUserBadges.rows.length === 0) {
                updatedBadgesArray = []
                for (const badge of allBadges){
                    updatedBadgesArray.push( {
                        badge_id : badge.badge_id,
                        step : 0,
                        date_earned : "1970-01-01"
                    });
                }
            } else {

                const badgeDataString = poolQueryUserBadges.rows[0].badges;
                const badgeDataArray =  badgeDataString.replace(/[\(\{]/g, '').replace(/\}/g, '').replace(/"/g, '').split("),");

                updatedBadgesArray = badgeDataArray.map((badgeItem: string) => {
                    const [badgeIdPart, stepPart, dateEarnedPart] = badgeItem.split(',');
                    const badge_id = parseInt(badgeIdPart);
                    const step = parseInt(stepPart);
                    const date_earned = dateEarnedPart.substring(0, 10);
                    return {
                        badge_id,
                        step,
                        date_earned
                    };
                });
            }

            let updatedBadgesDataArray: String[] = [];
            const today = new Date();
            const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

            for (const badge of allBadges){
                for (let step = 0; step < badge.steps.length - 1; step++)  {                
                    const key = "badge_" + badge.badge_id
                    if (stats[key] < badge.steps[0].requirement){
                        updatedBadgesArray[badge.badge_id - 1].step = 0
                        updatedBadgesArray[badge.badge_id - 1].date_earned = "1970-01-01"
                        break
                    }else if (stats[key] >= badge.steps[step].requirement){
                        updatedBadgesArray[badge.badge_id - 1].step = step
                        updatedBadgesArray[badge.badge_id - 1].date_earned = formattedDate
                    }
                }
                const updatedBadgeString = `(${ updatedBadgesArray[badge.badge_id - 1].badge_id},${ updatedBadgesArray[badge.badge_id - 1].step},'${ updatedBadgesArray[badge.badge_id - 1].date_earned}')`;
                updatedBadgesDataArray.push(updatedBadgeString);
            }

            const updatedBadgesData = updatedBadgesDataArray.join(',');
            let updateQuery;
            let values;
            if (poolQueryUserBadges.rows.length === 0) {
                updateQuery = `
                    INSERT INTO user_badges (user_id, badges, num_logins, last_login_date)
                    VALUES ($1, ARRAY[${updatedBadgesData}]::badge_data[], $2, $3)
                `;
                values = [user_id, "1", formattedDate]
            } else {
                updateQuery = `
                    UPDATE user_badges
                    SET badges = ARRAY[${updatedBadgesData}]::badge_data[]
                    WHERE user_id = $1;
                `;
                values = [user_id]
            }

            await pool.query(updateQuery, values);

        } catch (error) {
            console.error(error);
            throw new Error(`Unable to update all userBadges: ${error}`);
        }
    }

    // Fonction utiliser pour updateUserBadges
    // Permet de recuperer les stats en lien avec les badges
    static async getBadgesStatsByUser(user_id : Number): Promise<Stats> {
        try {

            // badge_1 => Nombre de masterclass fini
            // badge_2 => Nombre de programmes fini
            // badge_3 => Nombre d'articles publiés
            // badge_4 => Nombre de commentaires faits 
            // badge_5 => Temps inscrit au total depuis le début (en année)
            // badge_6 => Nombre de sujets d'articles où un commentaire a été fait
            // badge_7 => Nombre d'instruments differents étudié dans les differentes masterclass fini
            // badge_8 => Connu dans le site (dans la table people)
            // badge_9 => Nombre de programs faits pour une compétition suivi
            // badge_10 => Fait parti d'une école

            const query = `
                SELECT 
                    CAST(COUNT(DISTINCT CASE WHEN umt.is_validated THEN umt.masterclass_id END) AS INTEGER) AS badge_1,
                    CAST(COUNT(DISTINCT CASE WHEN upt.status = 'Finished' THEN upt.program_id END) AS INTEGER) AS badge_2,
                    CAST(COUNT(DISTINCT a.article_id) AS INTEGER) AS badge_3,
                    CAST(COUNT(DISTINCT c.comment_id) AS INTEGER) AS badge_4,
                    CAST(EXTRACT(year FROM AGE(NOW(), s.start_date)) AS INTEGER) AS badge_5,
                    CAST(COUNT(DISTINCT c.subject_id) AS INTEGER) AS badge_6,
                    CAST(COUNT(DISTINCT i) AS INTEGER) AS badge_7,
                    CAST(COUNT(DISTINCT p.people_id) AS INTEGER) AS badge_8,
                    CAST(COUNT(DISTINCT pm.program_id) AS INTEGER) AS badge_9,
                    CAST(COUNT(DISTINCT ps.people_id) AS INTEGER) AS badge_10
                FROM users u
                LEFT JOIN user_masterclass_tracking umt ON u.user_id = umt.user_id
                LEFT JOIN user_program_tracking upt ON u.user_id = upt.user_id
                LEFT JOIN subscriptions s ON u.user_id = s.user_id
                LEFT JOIN articles a ON u.user_id = a.user_id
                LEFT JOIN comments c ON u.user_id = c.user_id
                LEFT JOIN masterclasses mc ON umt.masterclass_id = mc.masterclass_id
                LEFT JOIN people p ON u.user_id = p.user_id
                LEFT JOIN LATERAL UNNEST(mc.instruments) AS i ON true
                LEFT JOIN competition_program_mapping pm ON upt.program_id = pm.program_id
                LEFT JOIN people_school_mapping ps ON p.people_id = ps.people_id
                WHERE u.user_id = $1
                GROUP BY u.user_id, s.start_date;
            `;
            const result = await pool.query(query, [user_id]);
    
            return result.rows[0];
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to get all stats: ${error}`);
        }
    }
    
  
}

export default GamificationRepository