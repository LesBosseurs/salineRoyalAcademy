import pool from "../db/database";

export interface Masterclass {
  title: string;
  description: string;
  genre: string;
  instruments: string;
/*   instruments: Array<string>;
 */}

class MasterclassesRepository {

  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM MASTERCLASSES';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch masterclasses: ${error}`);
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch masterclasses: ${error}`);
    }
  }

  static async getMasterclassByID(masterclassId: string): Promise<Masterclass> {
    try {
      const query = `
      SELECT *
      FROM masterclasses
      LEFT JOIN medias ON masterclasses.masterclass_id = medias.masterclass_id
      LEFT JOIN suivi_Masterclasses ON masterclasses.masterclass_id = suivi_Masterclasses.masterclass_id
      WHERE masterclasses.masterclass_id = $1;
      `;
      const values = [masterclassId];
      const result = await pool.query(query, values);    
      return result.rows[0];
    } catch (error: unknown) {
      throw new Error(`Unable to fetch masterclass: ${error}`);
    }
  }

  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      const values = [
        masterclass.title,
        masterclass.description,
        masterclass.genre,
        masterclass.instruments,
      ];
      const query =
        'INSERT INTO MASTERCLASSES (masterclass_id, title, description, genre, instruments) VALUES ($1, $2, $3, $4, $5)';
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to create masterclass: ${error}`);
    }
  }

  static async deleteMasterclass(masterclass_id: string): Promise<void> {
    try {
      const query = 'DELETE FROM MASTERCLASSES WHERE masterclass_id = $1';
      const values = [masterclass_id];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to delete masterclass: ${error}`);
    }
  }

}

export default MasterclassesRepository;