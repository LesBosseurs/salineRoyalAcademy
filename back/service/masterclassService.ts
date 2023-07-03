import MasterclassRepository, { Masterclass } from '../repository/masterclassRepository';
import pool from "../db/database";

class MasterclassService {
  static async getAllMasterclass(): Promise<Masterclass[]> {
    try {
      return await MasterclassRepository.getAllMasterclass();
    } catch (error: unknown) {
      throw new Error(`Unable to get all masterclass: ${error}`);
    }
  }
}

export default MasterclassService;
