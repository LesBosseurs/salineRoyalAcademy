// routers/gamificationRouter.ts
import express, { Router } from 'express';
import { GamificationController } from '../controllers/gamificationController';

const router = express.Router();

router.get('/getBadgesStatsByUser/:id', GamificationController.getBadgesStatsByUser);

router.get('/getAllBadgesWithUserBadges/:id', GamificationController.getAllBadgesWithUserBadges);

router.get('/dailyLogin/:id', GamificationController.dailyLogin);

router.post('/createBadge', GamificationController.createBadge)

router.post('/updateBadge', GamificationController.updateBadge);

router.post('/updateUserBadge/:id', GamificationController.updateUserBadge);



export default router;