import { Request, Response } from 'express';
import MasterclassService from '../service/masterclassService';

class MasterclassController {
    static async getAllMasterclass(req: Request, res: Response): Promise<void> {
      try {
        const masterclass = await MasterclassService.getAllMasterclass();
        res.json({ success: true, message: 'Masterclass retrieved successfully', data: masterclass });
      } catch (error: unknown) {
        res.status(500).json({ success: false, message: 'Failed to retrieve masterclass', error: error as Error });
      }
    }
  }
  
  export default MasterclassController;