import { User } from "../modele/user";
import { GroupFormatted } from "../modele/group";
import { School, SchoolFormatted } from "../modele/school";
import SchoolRepository from "../repository/schoolRepository";

class SchoolService {
  static async getAllSchools(): Promise<School[]> {
    try {
      return await SchoolRepository.getAllSchools();
    } catch (error: unknown) {
      throw new Error(`Unable to get all Schools: ${error}`);
    }
  }

  static async getSchoolById(schoolId: string): Promise<SchoolFormatted>{
    try {
      const schoolData = await SchoolRepository.getSchoolById(schoolId);
      const schoolFormatted: SchoolFormatted = {
        school_id: schoolData[0].school_id,
        name: schoolData[0].name,
        code: schoolData[0].code,
        type: schoolData[0].type,
        Groups: []
      };
  
      const groupsMap = new Map();
  
      for (const row of schoolData) {
        const group: GroupFormatted = {
          group_id: row.group_id,
          school_id: row.school_id,
          date_start: row.date_start,
          date_end: row.date_end,
          users: []
        };
  
        if (!groupsMap.has(row.group_id)) {
          groupsMap.set(row.group_id, group);
          schoolFormatted.Groups.push(group);
        }
  
        if (row.user_id && row.first_name && row.last_name) {
          const student = {
            user_id: row.user_id,
            first_name: row.first_name,
            last_name: row.last_name,
            link_picture: row.link_picture,
            is_teacher: row.is_teacher
          };
          groupsMap.get(row.group_id).users.push(student);
        }
      }
  
      return schoolFormatted;
    } catch (error) {
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