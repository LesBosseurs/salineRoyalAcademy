import { Request, Response } from 'express';
import GamificationService from '../service/gamificationService';
import { Badge } from '../modele/badge';
var jwt = require('jsonwebtoken');
require('dotenv').config()

export class GamificationController {

    // LES GET //

    static async getBadge(req: Request, res: Response): Promise<void> {
        try {
            const badge_id : Number = parseInt(req.params.badge_id);
            const result = await GamificationService.getBadge(badge_id); 
            res.status(200).json({ success: true, message: 'Badge find successfully for badge_id = ' + req.params.badge_id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Badge for badge_id = ' + req.params.badge_id, error: error as Error });
        };
    };

    static async getBadges(req: Request, res: Response): Promise<void> {
        try {
            const result = await GamificationService.getBadges(); 
            res.status(200).json({ success: true, message: 'All badges find successfully', data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find All Badges', error: error as Error });
        };
    };

    static async getUserBadge(req: Request, res: Response): Promise<void> {
        try {
            const user_id : Number = parseInt(req.params.user_id);
            const badge_id : Number = parseInt(req.params.badge_id);
            const result = await GamificationService.getUserBadge(user_id, badge_id); 
            res.status(200).json({ success: true, message: 'All badges find successfully', data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find All Badges', error: error as Error });
        };
    };

    static async getUserBadges(req: Request, res: Response): Promise<void> {
        try {
            const user_id : Number = parseInt(req.params.user_id);
            const result = await GamificationService.getUserBadges(user_id); 
            res.status(200).json({ success: true, message: 'All badges find successfully', data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find All Badges', error: error as Error });
        };
    };

    static async getAllBadgesWithUserBadges(req: Request, res: Response): Promise<void> {
        try {
            const user_id : Number = parseInt(req.params.user_id);
            const result = await GamificationService.getAllBadgesWithUserBadges(user_id); 
            res.status(200).json({ success: true, message: 'Badges and UserBadges find successfully for user_id = ' + req.params.user_id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Badges for user_id = ' + req.params.user_id, error: error as Error });
        };
    };

    static async getBadgesStatsByUser(req: Request, res: Response): Promise<void> {
        try {
            /* const user_id = jwt.verify(req.params.token, process.env.JWT_SECRET).id ; */
            const user_id : Number = parseInt(req.params.user_id);
            const result = await GamificationService.getBadgesStatsByUser(user_id); 
            res.status(200).json({ success: true, message: 'Stats find successfully for user_id = ' + req.params.user_id  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find Stats for user_id = ' + req.params.user_id, error: error as Error });
        };
    };

    static async getSchoolStats(req : Request, res : Response): Promise<void> {
        try {
            const school_id = parseInt(req.params.school_id);
            const result = await GamificationService.getSchoolStats(school_id); 
            res.status(200).json({ success: true, message: 'SchoolStats find successfully for school_id = ' + req.params.school_id, data: result }); 
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to find SchoolStats for school_id = ' + req.params.school_id, error: error as Error });
        };
    };


    // POST //

    static async createBadge(req: Request, res: Response): Promise<void> {
        try {
            const badge : Badge = req.body;
            const result = await GamificationService.createBadge(badge); 
            res.status(200).json({ success: true, message: 'Badge create successfully'  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create badge', error: error as Error });
        };
    };

    static async createBadges(req: Request, res: Response): Promise<void> {
        try {
            const badge : Badge[] = req.body;
            const result = await GamificationService.createBadges(badge); 
            res.status(200).json({ success: true, message: 'Badge create successfully'  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create badge', error: error as Error });
        };
    };

    static async updateBadge(req: Request, res: Response): Promise<void> {
        try {
            const badge_id : Number = parseInt(req.params.badge_id);
            const badge = req.body;
            const result = await GamificationService.updateBadge(badge_id, badge); 
            res.status(200).json({ success: true, message: 'Badge update successfully'  , data: result  });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to update badge', error: error as Error });
        };
    };

    static async updateUserBadges(req: Request, res: Response): Promise<void> {
        try {
            const user_id : Number = parseInt(req.params.user_id);
            const result = await GamificationService.updateUserBadges(user_id); 
            if (result == true) {
                res.status(200).json({ success: result, message: 'UserBadges update successfully for user_id = ' + user_id });
            }else {
                res.status(200).json({ success: result, message: 'Failed to update UserBadges for user_id = ' + user_id });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to update UserBadges', error: error as Error });
        };
    };

    
}
