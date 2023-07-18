import MasterclassesRepository, { Masterclass, MasterclassMediaPeople, SuiviMasterclass } from '../repository/masterclassesRepository';
import pool from "../db/database";

class MasterclassesService {

  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      return await MasterclassesRepository.getAllMasterclasses();
    } catch (error: unknown) {
      throw new Error(`Unable to get all masterclasses: ${error}`);
    }
  }

  static async getAllSuiviMasterclasses(user_id:Number): Promise<any[]> {
    try {
      return await MasterclassesRepository.getAllSuiviMasterclasses(user_id);
    } catch (error) {
      throw new Error(`Unable to get masterclasses: ${error}`);
    }
  }

  static async getMasterclassByID(masterclassId: Number): Promise<MasterclassMediaPeople> {
    try {
      return await MasterclassesRepository.getMasterclassByID(masterclassId);
    } catch (error: unknown) {
      throw new Error(`Unable to get masterclass: ${error}`);
    }
  }

  static async getMasterclassesByFilters(filters: Partial<Masterclass>): Promise<Masterclass[]> {
    try {
      return await MasterclassesRepository.getMasterclassesByFilters(filters);
    } catch (error) {
      throw new Error(`Unable to get masterclasses by Filters: ${error}`);
    }
  }

  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      await MasterclassesRepository.createMasterclass(masterclass);
    } catch (error) {
      throw new Error(`Unable to create masterclass: ${error}`);
    }
  }

  static async updateMasterclass(masterclassId: Number, updatedMasterclass: Masterclass): Promise<void> {
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

  static async getSuiviMasterclassByUser(user_id:Number, masterclass_id:Number): Promise<SuiviMasterclass> {
    try {
      return await MasterclassesRepository.getSuiviMasterclassByUser(user_id, masterclass_id);
    } catch (error) {
      throw new Error(`Unable to get masterclasses: ${error}`);
    }
  }

  

}

export default MasterclassesService;
