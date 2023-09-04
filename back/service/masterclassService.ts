// service/masterclassService.ts

import { Masterclass } from '../modele/masterclass';
import MasterclassRepository from '../repository/masterclassRepository';

class MasterclassService {
  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      return await MasterclassRepository.getAllMasterclasses();
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getMasterclassById(masterclassId: number): Promise<Masterclass> {
    try {
      return await MasterclassRepository.getMasterclassById(masterclassId);
    } catch (error) {
      throw error;
    }
  }

  
  static async getMasterclassByUserId(userId: number): Promise<number[]> {
    try {
      const res = await MasterclassRepository.getMasterclassByUserId(userId);
      const masterclassIds = res
        .map(item => item.masterclass_id) 
        .filter(id => id !== undefined)
        .map(id => id as number); 
  
      return masterclassIds;
    } catch (error) {
      throw error;
    }
  }
  
  

  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      await MasterclassRepository.createMasterclass(masterclass);
    } catch (error) {
      throw error;
    }
  }

  static async updateMasterclass(masterclassId: number, updatedMasterclass: Masterclass): Promise<void> {
    try {
      await MasterclassRepository.updateMasterclass(masterclassId, updatedMasterclass);
    } catch (error) {
      throw error;
    }
  }

  static async deleteMasterclass(masterclassId: number): Promise<void> {
    try {
      await MasterclassRepository.deleteMasterclass(masterclassId);
    } catch (error) {
      throw error;
    }
  }
}

export default MasterclassService;
