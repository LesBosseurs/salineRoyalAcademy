import pool from "../db/database";

export interface Programs {
    program_id: string;
    title: string;
    description: string;
    view_number: number;
    difficulty: string;
    instruments: string;
}

class ProgramsRepository {
  static async getAllPrograms(): Promise<Programs[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM PROGRAMS';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch programs: ${error}`);
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch programs: ${error}`);
    }
  }

  static async getProgramsById(programsId: string): Promise<Programs> {
    try {
      const query = `
      SELECT
        programs.program_id,
        programs.title,
        programs.description,
        programs.view_number,
        programs.difficulty,
        programs.instruments,
        masterclasses.masterclass_id AS mc_id,
        masterclasses.title AS mc_title,
        masterclasses.description AS mc_description,
        masterclasses.genre,
        suivi_Masterclasses.user_id AS suivi_user_id,
        suivi_Masterclasses.start_date,
        suivi_Masterclasses.is_validated
      FROM programs
      LEFT JOIN programs__masterclasses ON programs.program_id = programs__masterclasses.program_id
      LEFT JOIN masterclasses ON programs__masterclasses.masterclass_id = masterclasses.masterclass_id
      LEFT JOIN suivi_Masterclasses ON masterclasses.masterclass_id = suivi_Masterclasses.masterclass_id
      WHERE programs.program_id = $1;
      `;

      const values = [programsId];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error: unknown) {
      throw new Error(`Unable to fetch programs: ${error}`);
    }
  }

  static async deleteProgram(programId: string): Promise<void> {
    try {
      const query = 'DELETE FROM PROGRAMS WHERE program_id = $1';
      const values = [programId];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to delete user: ${error}`);
    }
  }
}

export default ProgramsRepository;