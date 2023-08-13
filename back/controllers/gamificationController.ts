import { Request, Response } from 'express';
import GamificationService from '../service/gamificationService';
import { Badge } from '../modele/badge';
var jwt = require('jsonwebtoken');
require('dotenv').config()

export class GamificationController {

    static async getBadgesStatsByUser(req: Request, res: Response): Promise<void> {
        try {
            /* const user_id = jwt.verify(req.params.token, process.env.JWT_SECRET).id ; */
            const user_id = parseInt(req.params.id);
            const result = await GamificationService.getBadgesStatsByUser(user_id); 
            res.status(200).json({ success: true, message: 'Stats find successfully for user_id = ' + req.params.id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Stats for user_id = ' + req.params.id, error: error as Error });
        };
    };

    static async getAllBadgesWithUserBadges(req: Request, res: Response): Promise<void> {
        try {
            /* const user_id = jwt.verify(req.params.token, process.env.JWT_SECRET).id ; */
            const user_id = parseInt(req.params.id);
            const result = await GamificationService.getAllBadgesWithUserBadges(user_id); 
            res.status(200).json({ success: true, message: 'Badges find successfully for user_id = ' + req.params.id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Badges for user_id = ' + req.params.id, error: error as Error });
        };
    };

    static async createBadge(req: Request, res: Response): Promise<void> {
        try {
            const badge = req.body;
            const result = await GamificationService.createBadge(badge); 
            res.status(200).json({ success: true, message: 'Badge create successfully'  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create badge', error: error as Error });
        };
    };

    static async updateBadge(req: Request, res: Response): Promise<void> {
        try {
            const badge = req.body;
            const result = await GamificationService.updateBadge(badge); 
            res.status(200).json({ success: true, message: 'Badge update successfully'  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to update badge', error: error as Error });
        };
    };

    static async updateUserBadge(req : Request, res : Response): Promise<void> {
        try {
            const user_id = parseInt(req.params.id);
            const user_badges = req.body;
            const result = await GamificationService.updateUserBadge(user_id, user_badges); 
            res.status(200).json({ success: true, message: 'userBadges update successfully for user_id = ' + req.params.id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to update Badges for user_id = ' + req.params.id, error: error as Error });
        };
    };

    static async dailyLogin(req : Request, res : Response): Promise<void> {
        try {
            const user_id = parseInt(req.params.id);
            const result = await GamificationService.dailyLogin(user_id); 
            if (result == true) {
                res.status(200).json({ success: true, message: 'The daily login is done for user_id = ' + req.params.id });
            }else {
                res.status(200).json({ success: true, message: 'The daily login was already done for user_id = ' + req.params.id });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to do the daily login for user_id = ' + req.params.id, error: error as Error });
        };
    };
}
