// repository/masterclassRepository.ts

import { Masterclass } from "../modele/masterclass";
import pool from "../db/database";

class MasterclassRepository {
  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM masterclasses';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw error
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getMasterclassById(masterclassId: number): Promise<Masterclass> {
    try {
      let c = await pool.connect()
      try {
        const query = `
        SELECT m.*, p.first_name, p.last_name
FROM masterclasses m
INNER JOIN people_masterclass_mapping pm ON m.masterclass_id = pm.masterclass_id
INNER JOIN people p ON pm.people_id = p.people_id
WHERE m.masterclass_id = $1;

        `;
        const values = [masterclassId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getMasterclassByUserId(userId: number): Promise<Masterclass[]> {
    try {
      let c = await pool.connect()
      try {
         const query = `
      SELECT m.masterclass_id
      FROM masterclasses m
      INNER JOIN user_masterclass_tracking umt ON m.masterclass_id = umt.masterclass_id
      WHERE umt.user_id = $1;
    `;
        const values = [userId];
        const result = await pool.query(query, values);
        return result.rows;
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          INSERT INTO masterclasses (title, description, citation, benefits, quote, genre, instruments, published_date, spoken_language)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `;
        const values = [
          masterclass.title,
          masterclass.description,
          masterclass.citation || null,
          masterclass.benefits || null,
          masterclass.quote || null,
          masterclass.genre || null,
          masterclass.instruments,
          masterclass.published_date,
          masterclass.spoken_language || null
        ];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async updateMasterclass(masterclassId: number, updatedMasterclass: Masterclass): Promise<void> {
    try {
      let c = await pool.connect()
      try {
        const query = `
          UPDATE masterclasses
          SET title = $1,
              description = $2,
              citation = $3,
              benefits = $4,
              quote = $5,
              genre = $6,
              instruments = $7,
              published_date = $8,
              spoken_language = $9
          WHERE masterclass_id = $10
        `;
        const values = [
          updatedMasterclass.title,
          updatedMasterclass.description,
          updatedMasterclass.citation || null,
          updatedMasterclass.benefits || null,
          updatedMasterclass.quote || null,
          updatedMasterclass.genre || null,
          updatedMasterclass.instruments,
          updatedMasterclass.published_date,
          updatedMasterclass.spoken_language || null,
          masterclassId
        ];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async deleteMasterclass(masterclassId: number): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const values = [masterclassId];
        const query = 'DELETE FROM masterclasses WHERE masterclass_id = $1';
        await pool.query(query, values);
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }
}

export default MasterclassRepository;
