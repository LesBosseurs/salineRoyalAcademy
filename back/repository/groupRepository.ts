import { Group } from "../modele/group";
import pool from "../db/database";

class GroupRepository {
  static async getAllGroups(): Promise<Group[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM groups';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch groups: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch groups: ${error}`);
    }
  }

  static async getGroupById(groupId: string): Promise<Group> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM groups WHERE group_id = $1';
        const values = [groupId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw new Error(`Unable to fetch group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch group: ${error}`);
    }
  }

  static async getGroupsBySchool(schoolId: string): Promise<Group[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM groups WHERE school_id = $1';
        const values = [schoolId];
        const result = await pool.query(query, values);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch groups by school: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch groups by school: ${error}`);
    }
  }

  static async createGroup(group: Group): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          INSERT INTO groups(school_id)
          VALUES($1)
        `;
        const values = [group.school_id];
        await pool.query(query, values);
      } catch (error) {
        throw new Error(`Unable to create group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to create group: ${error}`);
    }
  }

  static async updateGroup(groupId: string, updatedGroup: Group): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query = `
          UPDATE groups
          SET school_id = $1
          WHERE group_id = $2
        `;
        const values = [updatedGroup.school_id, groupId];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw new Error(`Unable to update group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to update group: ${error}`);
    }
  }

  static async deleteGroup(groupId: string): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query = 'DELETE FROM groups WHERE group_id = $1';
        const values = [groupId];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw new Error(`Unable to delete group: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to delete group: ${error}`);
    }
  }
}

export default GroupRepository;
