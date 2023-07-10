import { Request, Response } from 'express';
import MasterclassesService from '../service/masterclassesService';

class MasterclassesController {
    static async getAllMasterclasses(req: Request, res: Response): Promise<void> {
      try {
        const masterclasses = await MasterclassesService.getAllMasterclasses();
        res.json({ success: true, message: 'Masterclasses retrieved successfully', data: masterclasses });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to retrieve masterclasses', error: error as Error });
      }
    }

    static async getMasterclassByID(req: Request, res: Response): Promise<void> {
      try {
        const masterclassId = req.params.masterclassId;
        const masterclass = await MasterclassesService.getMasterclassByID(masterclassId);
        res.json({ success: true, message: 'Masterclasses retrieved successfully', data: masterclass });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to retrieve masterclasses', error: error as Error });
      }
    }

    static async getMasterclassesByFilters(req: Request, res: Response): Promise<void> {
      try {
        const filters = req.query;
  
        const masterclasses = await MasterclassesService.getMasterclassesByFilters(filters);
  
        res.status(200).json({ success: true, message: 'Masterclasses retrieved successfully', data: masterclasses });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to retrieve masterclasses by Filters', error: error as Error });
      }
    }

    static async createMasterclass(req: Request, res: Response): Promise<void> {
      try {
        const masterclass = req.body;
        await MasterclassesService.createMasterclass(masterclass);
        res.json({ success: true, message: 'Masterclass created successfully' });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to create masterclass', error: error as Error });
      }
    }

    static async updateMasterclass(req: Request, res: Response): Promise<void> {
      try {
        const masterclassId = Number(req.params.id);
        const updatedMasterclass = req.body;
        await MasterclassesService.updateMasterclass(masterclassId, updatedMasterclass);
        res.json({ success: true, message: 'Masterclass updated successfully' });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to update masterclass', error: error as Error });
      }
    }

    static async deleteMasterclass(req: Request, res: Response): Promise<void> {
      try {
        const masterclassId = req.body.masterclass_id;
        await MasterclassesService.deleteMasterclass(masterclassId);
        res.json({ success: true, message: 'Masterclass deleted successfully' });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to delete Masterclass', error: error as Error });
      }
    }

  }
  
  export default MasterclassesController;