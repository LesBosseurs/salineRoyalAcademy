import ProgramsRepository, { Programs } from '../repository/programsRepository';
import pool from "../db/database";

class ProgramsService {
  static async getAllPrograms(): Promise<Programs[]> {
    try {
      return await ProgramsRepository.getAllPrograms();
    } catch (error: unknown) {
      throw new Error(`Unable to get all programs: ${error}`);
    }
  }

  static async getProgramsById(programsId: string): Promise<Programs> {
    try {
      return await ProgramsRepository.getProgramsById(programsId);
    } catch (error) {
      throw new Error(`Unable to get programsId by ID: ${error}`);
    }
  }

  static async deleteProgram(programId: string): Promise<void> {
    try {
      await ProgramsRepository.deleteProgram(programId);
    } catch (error) {
      throw new Error(`Unable to delete program: ${error}`);
    }
  }
}

export default ProgramsService;