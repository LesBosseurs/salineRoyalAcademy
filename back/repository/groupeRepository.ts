import { Group } from "../modele/group";
import pool from "../db/database";

export class GroupRepository {
  static async createGroup(group: Group): Promise<Group> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          INSERT INTO "group" (school_id)
          VALUES ($1)
          RETURNING *
        `;
        const values = [group.school_id];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw new Error(`Unable to create group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error) {
      throw new Error(`Unable to create group: ${error}`);
    }
  }

  static async getGroupById(groupId: number): Promise<Group> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          SELECT * FROM "group"
          WHERE group_id = $1
        `;
        const values = [groupId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error) {
        throw new Error(`Unable to fetch group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error) {
      throw new Error(`Unable to fetch group: ${error}`);
    }
  }

  static async getAllGroups(): Promise<Group[]> {
    try {
      const c = await pool.connect();
      try {
        const query = `SELECT * FROM "group"`;
        const result = await pool.query(query);
        return result.rows;
      } catch (error) {
        throw new Error(`Unable to fetch groups: ${error}`);
      } finally {
        c.release();
      }
    } catch (error) {
      throw new Error(`Unable to fetch groups: ${error}`);
    }
  }

  static async updateGroup( groupeId: number, updatedGroupe: Group ): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query = ` UPDATE groupe SET school_id  = $1 WHERE group_id = $2`;
        const values = [groupeId, updatedGroupe.school_id];
        await pool.query(query, values);
      } catch (error) {
        throw new Error(`Unable to update group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error) {
      throw new Error(`Unable to update group: ${error}`);
    }
  }

  static async deleteGroup(groupId: number): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          DELETE FROM "group"
          WHERE group_id = $1
        `;
        const values = [groupId];
        await pool.query(query, values);
      } catch (error) {
        throw new Error(`Unable to delete group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error) {
      throw new Error(`Unable to delete group: ${error}`);
    }
  }
}
