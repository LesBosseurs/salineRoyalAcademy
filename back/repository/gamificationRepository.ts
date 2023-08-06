import pool from "../db/database";
import { Stats } from "../modele/stats";

class GamificationRepository { 
    static async getAllStatsByUser(user_id : Number): Promise<Stats> {
        try {
            const query = `
            SELECT 
                CAST(COUNT(DISTINCT CASE WHEN umt.is_validated THEN umt.masterclass_id END) AS INTEGER) AS num_masterclasses_finished,
                CAST(COUNT(DISTINCT CASE WHEN upt.status = 'Finished' THEN upt.program_id END) AS INTEGER) AS num_programs_finished,
                CAST(EXTRACT(year FROM AGE(NOW(), s.start_date)) AS INTEGER) AS subscription_years,
                CAST(COUNT(DISTINCT a.article_id) AS INTEGER) AS num_articles_published,
                CAST(COUNT(DISTINCT c.comment_id) AS INTEGER) AS num_comments_made,
                CAST(COUNT(DISTINCT c.subject_id) AS INTEGER) AS num_different_subjects,
                CAST(COUNT(DISTINCT i) AS INTEGER) AS num_different_instruments,
                CAST(COUNT(DISTINCT p.people_id) AS INTEGER) AS num_people_associated,
                CAST(COUNT(DISTINCT pm.program_id) AS INTEGER) AS num_programs_followed_in_competition,
                CAST(COUNT(DISTINCT ps.people_id) AS INTEGER) AS num_school_members
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
            console.log(result)
    
            return result.rows[0];
        } catch (error) {
            console.log(error)
            throw new Error(`Unable to get gamifications: ${error}`);
        }
    }
}

export default GamificationRepository