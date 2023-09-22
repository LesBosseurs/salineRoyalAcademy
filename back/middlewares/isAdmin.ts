import { Request, Response, NextFunction } from 'express';
import pool from "../db/database";

export async function checkAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.userId;
    const db = await pool.connect();

    try {
      const query = 'SELECT status FROM users WHERE user_id = $1';
      const result = await db.query(query, [userId]);

      if (result.rows.length === 1) {
        const userStatus = result.rows[0].status;

        if (userStatus === 'admin') {
          req.isAdmin = true;
        } else {
          req.isAdmin = false;
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
