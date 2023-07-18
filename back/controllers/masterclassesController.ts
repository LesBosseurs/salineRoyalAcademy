import { Request, Response } from 'express';
import MasterclassesService from '../service/masterclassesService';
var jwt = require('jsonwebtoken');
require('dotenv').config()

class MasterclassesController {
    static async getAllMasterclasses(req: Request, res: Response): Promise<void> {
      try {
        const masterclasses = await MasterclassesService.getAllMasterclasses();
        res.json({ success: true, message: 'Masterclasses retrieved successfully', data: masterclasses })
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to retrieve masterclasses', error: error as Error });
      }
    }

    static async getAllSuiviMasterclasses(req: Request, res: Response) {
      try {
        const user_id = jwt.verify(req.params.token, process.env.JWT_SECRET).id ;
        const result = await MasterclassesService.getAllSuiviMasterclasses(user_id);
        console.log(result);
        res.json({ success: true, message: 'Masterclasses retrieved successfully', data: result});
      
      } catch (error: unknown) {
        return false
      }
    }

    static async getMasterclassByID(req: Request, res: Response): Promise<void> {
      try {
        const token = req.params.token;
        const masterclassId = Number(req.params.masterclassId);
        const masterclass = await MasterclassesService.getMasterclassByID(masterclassId); 
        const suivi = await MasterclassesController.getSuiviMasterclassByUser(token, masterclassId);
 
        res.json({ success: true, message: 'Masterclasses retrieved successfully', data: {
            masterclass : masterclass,
            suivi : suivi 
          }
        });
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
        res.json({ success: true, message: 'Masterclass deleted successfully' });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to delete Masterclass', error: error as Error });
      }
    }

    static async getSuiviMasterclassByUser(token:String, masterclass_id:Number) {
      try {
        const user_id = jwt.verify(token, process.env.JWT_SECRET).id ;    
        const result = await MasterclassesService.getSuiviMasterclassByUser(user_id, masterclass_id);
        return {
          user_id: result.user_id,
          masterclass_id: result.masterclass_id,
          start_date: result.start_date,
          is_validated: result.is_validated,
          view_number: result.view_number
        };
      } catch (error: unknown) {
        return false;
      }
    }

    

  }
  
  export default MasterclassesController;