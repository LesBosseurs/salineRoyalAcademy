import pool from "../db/database";
import { UserStats } from "../modele/user_badges";
import { user_badges } from "../modele/user_badges";
import { Badge } from "../modele/badge";
import { SchoolStats } from "../modele/school";

class GamificationRepository { 


    // Fonction qui recupere un badge en fonction de son badge_id
    static async getBadge(badge_id : Number): Promise<Badge> {
        try {

            let query = `
                SELECT
                    badge_id,
                    name,
                    description,
                    image,
                    ARRAY(SELECT json_build_object('level', s.level, 'requirement', s.requirement) FROM unnest(steps) s) as steps
                FROM
                    badges
                WHERE 
                    badge_id = $1
            `;
            
            const values = [badge_id];
            const response = await pool.query(query, values);
            return response.rows[0];
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to get badge: ${error}`);
        }
    }


    // Fonction qui recupere tous les badges
    static async getBadges(): Promise<Badge[]> {
        try {

            let query = `
                SELECT
                    badge_id,
                    name,
                    description,
                    image,
                    ARRAY(SELECT json_build_object('level', s.level, 'requirement', s.requirement) FROM unnest(steps) s) as steps
                FROM
                    badges
            `;

            const response = await pool.query(query);
            return response.rows;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to get badges: ${error}`);
        }
    }


    // Fonction qui recupere un badge en fonction de son badge_id
    static async getUserBadge(user_id: Number, badge_id: Number): Promise<user_badges> {
        try {
            const userBadgesQuery = `
                SELECT
                    user_id,
                    badge_id,
                    step,
                    badge_experiences,
                    date_earned
                FROM
                    user_badges_tracking
                WHERE
                    user_id = $1
                    AND badge_id = $2;
            `;
            const values = [user_id, badge_id];
            const userBadges = await pool.query(userBadgesQuery,values);
            const response = userBadges.rows[0];
            return response;
        } catch (error) {
            throw new Error(`Unable to get all badges: ${error}`);
        }
    }


    // Fonction qui recupere tous les UserBadges d'un user
    static async getUserBadges(user_id: Number): Promise<user_badges[]> {
        try {
            const userBadgesQuery = `
                SELECT
                    user_id,
                    badge_id,
                    step,
                    badge_experiences,
                    date_earned
                FROM
                    user_badges_tracking
                WHERE
                    user_id = $1;
            `;
            const userBadges = await pool.query(userBadgesQuery, [user_id]);
            const response = userBadges.rows;
            return response;
            
        } catch (error) {
            throw new Error(`Unable to get all badges: ${error}`);
        }
    }


    // Fonction qui va recuperer les stats des badges 
    // badge_1 => Experience du user (nbMasterclass * 10 + nbProgram * 100)
    // badge_2 => Daily Login
    // badge_3 => Nombre de masterclass fini
    // badge_4 => Nombre de programmes fini
    // badge_5 => Nombre d'articles publiés
    // badge_6 => Nombre de commentaires faits 
    // badge_7 => Temps inscrit au total depuis le début (en année)
    // badge_8 => Nombre de sujets d'articles où un commentaire a été fait
    // badge_9 => Nombre d'instruments differents étudié dans les differentes masterclass fini
    // badge_10 => Connu dans le site (dans la table people)
    // badge_11 => Nombre de programs faits pour une compétition suivi
    // badge_12 => Fait ou a fait parti d'une école
    static async getBadgesStatsByUser(user_id: Number): Promise<UserStats> {
        try {
            /* const query = `
                SELECT 
                    CAST(COUNT(DISTINCT CASE WHEN umt.is_validated THEN umt.masterclass_id END) AS INTEGER) AS badge_3,
                    CAST(COUNT(DISTINCT CASE WHEN upt.status = 'Finished' THEN upt.program_id END) AS INTEGER) AS badge_4,
                    CAST(COUNT(DISTINCT a.article_id) AS INTEGER) AS badge_5,
                    CAST(COUNT(DISTINCT c.comment_id) AS INTEGER) AS badge_6,
                    CAST(EXTRACT(year FROM AGE(NOW(), s.start_date)) AS INTEGER) AS badge_7,
                    CAST(COUNT(DISTINCT c.subject_id) AS INTEGER) AS badge_8,
                    CAST(COUNT(DISTINCT i) AS INTEGER) AS badge_9,
                    CAST(COUNT(DISTINCT p.people_id) AS INTEGER) AS badge_10,
                    CAST(COUNT(DISTINCT pm.program_id) AS INTEGER) AS badge_11,
                    CAST(COUNT(DISTINCT ps.people_id) AS INTEGER) AS badge_12
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
            `; */

            const query = `
            SELECT 
                CAST(COUNT(DISTINCT CASE WHEN umt.is_validated THEN umt.masterclass_id END) AS INTEGER) AS badge_3,
                CAST(COUNT(DISTINCT CASE WHEN upt.status = 'Finished' THEN upt.program_id END) AS INTEGER) AS badge_4,
                CAST(COUNT(DISTINCT a.article_id) AS INTEGER) AS badge_5,
                CAST(COUNT(DISTINCT c.comment_id) AS INTEGER) AS badge_6,
                CAST(EXTRACT(year FROM AGE(NOW(), s.start_date)) AS INTEGER) AS badge_7,
                CAST(COUNT(DISTINCT c.subject_id) AS INTEGER) AS badge_8,
                CAST(COUNT(DISTINCT i) AS INTEGER) AS badge_9,
                CAST(COUNT(DISTINCT p.people_id) AS INTEGER) AS badge_10,
                CAST(COUNT(DISTINCT pm.program_id) AS INTEGER) AS badge_11,
                CAST(COUNT(DISTINCT ps.people_id) AS INTEGER) AS badge_12,
                ARRAY[ubt.badge_experiences::text, ubt.date_earned::text] AS badge_2,
                50 AS badge_1
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
            LEFT JOIN user_badges_tracking ubt ON u.user_id = ubt.user_id AND ubt.badge_id = 2 -- Badge 2 (Daily Login)
            WHERE u.user_id = $1
            GROUP BY u.user_id, s.start_date, ubt.badge_experiences, ubt.date_earned;
        
            `;
            const result = await pool.query(query, [user_id]);   
            let experienceUser = result.rows[0].badge_3 * 10 + result.rows[0].badge_4 * 100;
            result.rows[0].badge_1 = experienceUser;
            return result.rows[0];
        } catch (error) {
            console.log(error);
            throw new Error(`Unable to get all stats: ${error}`);
        }
    }


    // Fonction qui recupere les stats d'une école
    // Pour l'instant 3 stats : 
    // Le nombre de masterclass regardées par les élèves
    // Le nombre de programs regardés par les élèves
    // Le nombre de users actifs
    static async getSchoolStats(school_id: Number): Promise<SchoolStats> {
        try {
            const query = `
                SELECT
                    COUNT(DISTINCT user_masterclass_tracking.masterclass_id) AS masterclass_count,
                    COUNT(DISTINCT user_program_tracking.program_id) AS program_count,
                    COUNT(DISTINCT CASE WHEN users.status = 'active' THEN users.user_id END) AS active_user_count
                FROM
                    user_masterclass_tracking
                INNER JOIN
                    users ON user_masterclass_tracking.user_id = users.user_id
                INNER JOIN
                    people ON users.user_id = people.user_id
                INNER JOIN
                    people_school_mapping ON people.people_id = people_school_mapping.people_id
                INNER JOIN
                    user_program_tracking ON user_masterclass_tracking.user_id = user_program_tracking.user_id
                WHERE
                    people_school_mapping.school_id = $1;
            `;
            const values = [school_id];
            const result = await pool.query(query, values);

            const stats: SchoolStats = {
                masterclassCount: parseInt(result.rows[0].masterclass_count),
                programCount: parseInt(result.rows[0].program_count),
                activeUserCount: parseInt(result.rows[0].active_user_count)
            };

            return stats;
        } catch (error) {
            console.error(error);
            throw new Error(`Unable to retrieve school stats: ${error}`);
        }
    }


    // Fonction qui creer une nouvelle ligne dans la table badges
    // Elle va aussi ajouter une nouvelle progression pour ce badge a tous les users (dans la table user_badges_tracking)
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
                INSERT INTO user_badges_tracking (user_id, badge_id, step, badge_experiences, date_earned)
                SELECT u.user_id, $1, $2, $3, $4::DATE
                FROM users u;
            `;
            values = [insertedBadgeId, 0, 0, "1970-01-01"];
            await pool.query(query, values);
            badge["badge_id"] = result.rows[0].badge_id
            return badge;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to create badge: ${error}`);
        }
    }
    

    // Fonction qui creer de nouvelles lignes dans la table badges
    // Elle va aussi ajouter une nouvelle progression pour ces badges a tous les users (dans la table user_badges_tracking)
    static async createBadges(badges : Badge[]): Promise<Badge[]> {
        try {

            let arrayBadges : Badge[] = [];
            for (let badge of badges) {
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
                    INSERT INTO user_badges_tracking (user_id, badge_id, step, badge_experiences, date_earned)
                    SELECT u.user_id, $1, $2, $3, $4::DATE
                    FROM users u;
                `;
                values = [insertedBadgeId, 0, 0, "1970-01-01"];
                await pool.query(query, values);
                badge["badge_id"] = result.rows[0].badge_id;
                arrayBadges.push(badge);
            }
            
            return arrayBadges;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to create badges: ${error}`);
        }
    }


    // Fonction qui update un badge 
    static async updateBadge(badge_id : Number, badge : Badge): Promise<Badge> {
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
            let values = [badge.name, badge.description, badge.image , formatedStep, badge_id];
            await pool.query(query, values);
            
            return badge;
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to update badge: ${error}`);
        }
    }
    

    // Fonction utiliser pour getAllBadgesWithUserBadges
    // Permet d'update la progression des tous les badges d'un user
    // Si c'est un nouvelle utilisateur, cela creer la progression 
    static async updateUserBadges(user_id: Number, allBadges: Badge[], stats: UserStats): Promise<Boolean> {
        try {    

            let currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            currentDate = new Date(formattedDate);
            const yesterdayDate = new Date(currentDate);
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);
            const formattedYesterdayDate = `${yesterdayDate.getFullYear()}-${(yesterdayDate.getMonth() + 1).toString().padStart(2, '0')}-${yesterdayDate.getDate().toString().padStart(2, '0')}`;

            for (const badge of allBadges) {

                let query = `
                    INSERT INTO user_badges_tracking (user_id, badge_id, step, badge_experiences, date_earned)
                    VALUES ($1, $2, $3, $4, $5::DATE)
                    ON CONFLICT (user_id, badge_id) DO UPDATE
                    SET step = EXCLUDED.step, badge_experiences = EXCLUDED.badge_experiences, date_earned = $5::DATE;
                `;

                let user_badge = {
                    user_id : user_id,
                    badge_id : badge.badge_id,
                    step : 0,
                    badge_experience: stats[`badge_${badge.badge_id}`] || 0,
                    date_earned: "1970-01-01"
                };

                // Badge_2 different des autres (tableau) => daily_login
                if (badge.badge_id == 2){
                    const badgeStats = stats[`badge_${badge.badge_id}`];
                    if (Array.isArray(badgeStats)) {
                        if (badgeStats[1] === formattedDate) {
                            user_badge.badge_experience = parseInt(badgeStats[0]);
                        } else if (badgeStats && badgeStats[1] === formattedYesterdayDate) {
                            user_badge.badge_experience = parseInt(badgeStats[0]) + 1;
                        }else  {
                            user_badge.badge_experience = 1;
                        };
                        user_badge.date_earned = formattedDate;
                    }     ;               
                };

                // Badge qui garde leur step malgré une reinitialisation de la progression (progression => user_badge.badge_experience)
                if (badge.badge_id == 2 || badge.badge_id == 12){
                    query = `
                            INSERT INTO user_badges_tracking (user_id, badge_id, step, badge_experiences, date_earned)
                            VALUES ($1, $2, $3, $4, $5::DATE)
                            ON CONFLICT (user_id, badge_id) DO UPDATE
                            SET step = EXCLUDED.step, badge_experiences = EXCLUDED.badge_experiences, date_earned = $5::DATE
                            WHERE EXCLUDED.step > user_badges_tracking.step;
                    `;
                };

                for(const step of badge.steps) {
                    if (step.requirement <= user_badge.badge_experience) {
                        user_badge.step += 1 ;
                        user_badge.date_earned = formattedDate;
                    } else {
                        break;
                    };
                };
                const values = [user_badge.user_id, user_badge.badge_id, user_badge.step, user_badge.badge_experience, user_badge.date_earned];
                await pool.query(query, values);  
            }
            return true;

        } catch (error) {
            console.error(error);
            throw new Error(`Unable to update all userBadges: ${error}`);
        }
    }


}

export default GamificationRepository