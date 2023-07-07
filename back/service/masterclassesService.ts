import MasterclassesRepository, { Masterclass, MasterclassMediaPeople } from '../repository/masterclassesRepository';
import pool from "../db/database";

class MasterclassesService {

  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      return await MasterclassesRepository.getAllMasterclasses();
    } catch (error: unknown) {
      throw new Error(`Unable to get all masterclasses: ${error}`);
    }
  }

  static async getMasterclassByID(masterclassId: string): Promise<MasterclassMediaPeople> {
    try {
      return await MasterclassesRepository.getMasterclassByID(masterclassId);
    } catch (error: unknown) {
      throw new Error(`Unable to get masterclass: ${error}`);
    }
  }

  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      await MasterclassesRepository.createMasterclass(masterclass);
    } catch (error) {
      throw new Error(`Unable to create masterclass: ${error}`);
    }
  }

  static async updateMasterclass(masterclassId: string, updatedMasterclass: Masterclass): Promise<void> {
    try {
      await MasterclassesRepository.updateMasterclass(masterclassId, updatedMasterclass);
    } catch (error) {
      throw new Error(`Unable to update user: ${error}`);
    }
  }

  static async deleteMasterclass(masterclass_id: string): Promise<void> {
    try {
      await MasterclassesRepository.deleteMasterclass(masterclass_id);
    } catch (error) {
      throw new Error(`Unable to delete Masterclass: ${error}`);
    }
  }

}

export default MasterclassesService;
