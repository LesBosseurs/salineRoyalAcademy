import { Group } from "../modele/group";
import pool from "../db/database";

export class GroupRepository {
  static async createGroup(group: Group): Promise<Group> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          INSERT INTO groups (school_id)
          VALUES ($1)
          RETURNING *
        `;
        const values = [group.school_id];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }

  static async getGroupById(groupId: string): Promise<Group> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          SELECT * FROM groups
          WHERE group_id = $1
        `;
        const values = [groupId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }

  static async getAllGroups(): Promise<Group[]> {
    try {
      const c = await pool.connect();
      try {
        const query = `SELECT * FROM groups`;
        const result = await pool.query(query);
        return result.rows;
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateGroup( updatedGroupe: Group ): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query =  `UPDATE groups
        SET school_id = $2,
        date_start = $3,
        date_end = $4
        WHERE group_id = $1
      `;
      const values = [
        updatedGroupe.group_id,
        updatedGroupe.school_id,
        updatedGroupe.date_start,
        updatedGroupe.date_end
      ];
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

  static async deleteGroup(groupId: string): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          DELETE FROM groups
          WHERE group_id = $1
        `;
        const values = [groupId];
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
