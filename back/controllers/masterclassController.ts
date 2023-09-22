// controllers/masterclassController.ts

import { Request, Response } from 'express';
import MasterclassService from '../service/masterclassService';

class MasterclassController {
  static async getAllMasterclasses(req: Request, res: Response): Promise<void> {
    try {
      const masterclasses = await MasterclassService.getAllMasterclasses();
      res.status(200).json({ success: true, message: 'Masterclasses retrieved successfully', data: masterclasses });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to retrieve masterclasses', errorMessage: error.message });
    }
  }

  static async getMasterclassById(req: Request, res: Response): Promise<void> {
    try {
      const masterclassId = parseInt(req.params.id);
      const masterclass = await MasterclassService.getMasterclassById(masterclassId);
      res.status(200).json({ success: true, message: 'Masterclass retrieved successfully', data: masterclass });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to retrieve masterclass by ID', errorMessage: error.message });
    }
  }

  static async getMasterclassByUserId(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id);
      const masterclass = await MasterclassService.getMasterclassByUserId(userId);
      res.status(200).json({ success: true, message: 'Masterclass by User retrieved successfully', data: masterclass });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to retrieve masterclass by ID', errorMessage: error.message });
    }
  }

  static async createMasterclass(req: Request, res: Response): Promise<void> {
    try {
      const masterclassData = req.body;
      await MasterclassService.createMasterclass(masterclassData);
      res.status(200).json({ success: true, message: 'Masterclass created successfully' });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to create masterclass', errorMessage: error.message });
    }
  }

  static async updateMasterclass(req: Request, res: Response): Promise<void> {
    try {
      const masterclassId = parseInt(req.params.id);
      const updatedMasterclass = req.body;
      await MasterclassService.updateMasterclass(masterclassId, updatedMasterclass);
      res.status(200).json({ success: true, message: 'Masterclass updated successfully' });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to update masterclass', errorMessage: error.message });
    }
  }

  static async deleteMasterclass(req: Request, res: Response): Promise<void> {
    try {
      const masterclassId = parseInt(req.params.id);
      await MasterclassService.deleteMasterclass(masterclassId);
      res.status(200).json({ success: true, message: 'Masterclass deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Failed to delete masterclass', errorMessage: error.message });
    }
  }
}

export default MasterclassController;
