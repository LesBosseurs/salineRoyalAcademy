import pool from "../db/database";

export interface Masterclass {
  title: string;
  description: string;
  genre: string;
  instruments: Array<string>;
}

class MasterclassRepository {
  static async getAllMasterclass(): Promise<Masterclass[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM MASTERCLASS';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch users: ${error}`);
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch users: ${error}`);
    }
  }
}

export default MasterclassRepository;