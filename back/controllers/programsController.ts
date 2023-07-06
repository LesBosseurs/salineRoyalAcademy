import { Request, Response } from 'express';
import ProgramsService from '../service/programsService';

class ProgramsController {
  static async getAllPrograms(req: Request, res: Response): Promise<void> {
    try {
      const programs = await ProgramsService.getAllPrograms();
      res.json({ success: true, message: 'Programs retrieved successfully', data: programs });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve programs', error: error as Error });
    }
  }

  static async getProgramsById(req: Request, res: Response): Promise<void> {
    try {
      const programId = req.params.id;
      const program = await ProgramsService.getProgramsById(programId);
      res.json({ success: true, message: 'Programs retrieved successfully', data: program });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve programs', error: error as Error });
    }
  }

  static async deleteProgram(req: Request, res: Response): Promise<void> {
    try {
      const programId = req.params.program_id;
      await ProgramsService.deleteProgram(programId);
      res.json({ success: true, message: 'Program deleted successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to delete Program', error: error as Error });
    }
  }
}

export default ProgramsController;
