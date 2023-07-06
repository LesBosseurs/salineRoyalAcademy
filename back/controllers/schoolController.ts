import { Request, Response } from 'express';
import SchoolService from '../service/schoolService';

class SchoolController {
  static async getAllSchools(req: Request, res: Response): Promise<void> {
    try {
      const schools = await SchoolService.getAllSchools();
      res.status(200).json({ success: true, message: 'Schools retrieved successfully', data: schools });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve schools', error: error as Error });
    }
  }

  static async getSchoolById(req: Request, res: Response): Promise<void> {
    try {
      const schoolId = req.params.id;
      const school = await SchoolService.getSchoolById(schoolId);
      res.status(200).json({ success: true, message: 'School retrieved successfully', data: school });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve school by ID', error: error as Error });
    }
  }

  static async createSchool(req: Request, res: Response): Promise<void> {
    try {
      const school = req.body;
      await SchoolService.createSchool(school);
      res.status(200).json({ success: true, message: 'School created successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to create school', error: error as Error });
    }
  }

  static async updateSchool(req: Request, res: Response): Promise<void> {
    try {
      const schoolId = req.params.id;
      const updatedSchool = req.body;
      await SchoolService.updateSchool(schoolId, updatedSchool);
      res.status(200).json({ success: true, message: 'School updated successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to update school', error: error as Error });
    }
  }

  static async deleteSchool(req: Request, res: Response): Promise<void> {
    try {
      const schoolId = req.params.id;
      await SchoolService.deleteSchool(schoolId);
      res.status(200).json({ success: true, message: 'School deleted successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to delete school', error: error as Error });
    }
  }

  static async getSchoolsByFilters(req: Request, res: Response): Promise<void> {
    try {
      const filters = req.query;

      const users = await SchoolService.getSchoolsByFilters(filters);

      res.status(200).json({ success: true, message: 'Schools retrieved successfully', data: users });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve users by Filters', error: error as Error });
    }
}
}

export default SchoolController;