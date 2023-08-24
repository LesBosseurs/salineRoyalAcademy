// routers/groupRouter.ts
import express from 'express';
import { GamificationController } from '../controllers/gamificationController';

const router = express.Router();

//ROUTE GET 

router.get('/getBadge/:badge_id', GamificationController.getBadge);

router.get('/getBadges', GamificationController.getBadges);

router.get('/getUserBadge/:user_id/:badge_id', GamificationController.getUserBadge);

router.get('/getUserBadges/:user_id', GamificationController.getUserBadges);

router.get('/getAllBadgesWithUserBadges/:user_id', GamificationController.getAllBadgesWithUserBadges);

router.get('/getBadgesStatsByUser/:user_id', GamificationController.getBadgesStatsByUser);

router.get('/getSchoolStats/:school_id', GamificationController.getSchoolStats);

// ROUTE POST 

router.post('/createBadge', GamificationController.createBadge);

router.post('/createBadges', GamificationController.createBadges);

router.post('/updateBadge/:badge_id', GamificationController.updateBadge);

router.post('/updateUserBadges/:user_id', GamificationController.updateUserBadges);




export default router;