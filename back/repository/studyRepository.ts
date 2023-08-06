import pool from "../db/database";

class StudyRepository {
    static async addUserToGroup(userId: number, groupId: number, isTeacher: boolean): Promise<void> {
        try {
          const c = await pool.connect();
          try {
            const query = `
            INSERT INTO study (user_id, group_id, is_teacher)
            VALUES ($1, $2, $3)
            ON CONFLICT (user_id, group_id)
            DO UPDATE SET is_teacher = EXCLUDED.is_teacher
          `;
            const values = [
             userId,
             groupId,
             isTeacher
            ]
            await pool.query(query, values);
          } catch (error) {
            throw error;
          } finally {
            c.release();
          }
        } catch (error: unknown) {
          throw error;
        }
      }
}


export default StudyRepository;