import pool from "../db/database";
import { School } from "../modele/school";
import SchoolRepository from "../repository/schoolRepository";

class SchoolService {
  static async getAllSchools(): Promise<School[]> {
    try {
      return await SchoolRepository.getAllSchools();
    } catch (error: unknown) {
      throw new Error(`Unable to get all Schools: ${error}`);
    }
  }

  static async getSchoolById(schoolId: string): Promise<School> {
    try {
      return await SchoolRepository.getSchoolById(schoolId);
    } catch (error: unknown) {
      throw new Error(`Unable to get School by ID: ${error}`);
    }
  }

  static async createSchool(school: School): Promise<void> {
    try {
      return await SchoolRepository.createSchool(school);
    } catch (error: unknown) {
      throw new Error(`Unable to create a school: ${error}`);
    }
  }

  static async updateSchool(schoolId: string, updatedSchool: School): Promise<void> {
    try {
      await SchoolRepository.updateSchool(schoolId, updatedSchool);
    } catch (error) {
      throw new Error(`Unable to update school: ${error}`);
    }
  }

  static async deleteSchool(schoolId: string): Promise<void> {
    try {
      await SchoolRepository.deleteSchool(schoolId);
    } catch (error) {
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