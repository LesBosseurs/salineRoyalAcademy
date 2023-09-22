import { Request, Response, NextFunction } from 'express';
import pool from "../db/database";

export async function checkTeacher(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.idUser;
    const schoolId = req.params.idSchool;
    const db = await pool.connect();

    try {
      const query = `
        SELECT COUNT(*) AS teacher_count
        FROM study
        WHERE user_id = $1
        AND group_id IN (SELECT group_id FROM groups WHERE school_id = $2)
        AND is_teacher = true
      `;
      const result = await db.query(query, [userId, schoolId]);

      if (result.rows.length === 1) {
        const teacherCount = result.rows[0].teacher_count;

        if (teacherCount > 0) {
          req.isTeacher = true;
        } else {
          req.isTeacher = false;
        }

        next();
      } else {
        res.status(404).json({ error: 'Utilisateur introuvable' });
      }
    } catch (error) {
      throw error;
    } finally {
      db.release();
    }
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
    res.status(500).json({ error: 'Erreur lors de la connexion à la base de données' });
  }
}
