import { School, SchoolFormatted } from "../modele/school";
import pool from "../db/database";

class SchoolRepository {
  static async getAllSchools(): Promise<School[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM schools';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getSchoolById(schoolId: string): Promise<any> { // a corriger
    try {
      let c = await pool.connect();
      try {
        const query = `
        SELECT
  schools.*,
  groups.group_id,
  groups.date_start,
  groups.date_end,
  users.user_id,
  users.first_name,
  users.last_name,
  users.link_picture,
  study.is_teacher
FROM schools
LEFT JOIN groups ON schools.school_id = groups.school_id
LEFT JOIN study ON groups.group_id = study.group_id
LEFT JOIN users ON study.user_id = users.user_id
WHERE schools.school_id = $1;

      `;
  
        const values = [schoolId];
        const result = await pool.query(query, values);
        return result.rows;
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }
  

  static async createSchool(school: School): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
          INSERT INTO schools(name, code, type)
          VALUES($1, $2, $3)
        `;
        const values = [school.name, school.code, school.type];
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

  static async updateSchool(schoolId: string, updatedSchool: School): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query = `
          UPDATE schools
          SET name = $1,
              code = $2,
              type = $3
          WHERE school_id = $4
        `;
        const values = [updatedSchool.name, updatedSchool.code, updatedSchool.type, schoolId];
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

  static async deleteSchool(schoolId: string): Promise<void> {
    try {
      let c = await pool.connect();
      try {
        const query = 'DELETE FROM schools WHERE school_id = $1';
        const values = [schoolId];
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

  static async getSchoolsByFilters(filters: Partial<School>): Promise<School[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM schools';
        const values: any[] = [];
        const conditions: string[] = [];
  
        // Construire les conditions de recherche en fonction des filtres fournis
        for (const key in filters) {
          if (filters.hasOwnProperty(key) && filters[key as keyof School]) {
            conditions.push(`${key} ILIKE $${values.length + 1}`);
            values.push(`${filters[key as keyof School]}%`);
          }
        }
  
        // Ajouter les conditions à la requête si des filtres ont été fournis
        let filteredQuery = query;
        if (conditions.length > 0) {
          filteredQuery += ' WHERE ' + conditions.join(' AND ');
        }
        const result = await pool.query(filteredQuery, values);
        return result.rows;
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }
  
}

export default SchoolRepository;