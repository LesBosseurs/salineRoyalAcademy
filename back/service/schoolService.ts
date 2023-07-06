import pool from "../db/database";
import { School } from "../modele/school";
import SchoolRepository from "../repository/schoolRepository";

class SchoolService {
  static async getAllSchools(): Promise<School[]> {
    try {
      const query = 'SELECT * FROM schools';
      const result = await pool.query(query);
      return result.rows;
    } catch (error: unknown) {
      throw new Error(`Unable to fetch schools: ${error}`);
    }
  }

  static async getSchoolById(schoolId: string): Promise<School> {
    try {
      const query = 'SELECT * FROM schools WHERE school_id = $1';
      const values = [schoolId];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error: unknown) {
      throw new Error(`Unable to fetch school: ${error}`);
    }
  }

  static async createSchool(school: School): Promise<void> {
    try {
      const query = `
        INSERT INTO schools(name, code, type)
        VALUES($1, $2, $3)
      `;
      const values = [school.name, school.code, school.type];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to create school: ${error}`);
    }
  }

  static async updateSchool(schoolId: string, updatedSchool: School): Promise<void> {
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
      throw new Error(`Unable to update school: ${error}`);
    }
  }

  static async deleteSchool(schoolId: string): Promise<void> {
    try {
      const query = 'DELETE FROM schools WHERE school_id = $1';
      const values = [schoolId];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to delete school: ${error}`);
    }
  }

  static async getSchoolsByFilters(filters: Partial<School>): Promise<School[]> {
    try {
      return await SchoolRepository.getSchoolsByFilters(filters);
    } catch (error) {
      throw new Error(`Unable to get school by Filters: ${error}`);
    }
  }
}

export default SchoolService;
