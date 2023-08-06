import { Request, Response } from 'express';
import GamificationService from '../service/gamificationService';
var jwt = require('jsonwebtoken');
require('dotenv').config()

export class GamificationController {

    static async getAllStatsByUser(req: Request, res: Response): Promise<void> {
        try {
            /* const user_id = jwt.verify(req.params.token, process.env.JWT_SECRET).id ; */
            const user_id = parseInt(req.params.id)
            const getGamifcations = await GamificationService.getAllStatsByUser(user_id); 
            res.status(200).json({ success: true, message: 'Stats find successfully for user_id = ' + req.params.id  , data: getGamifcations  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Gamifications', error: error as Error });
        }
    }
}
