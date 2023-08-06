// routers/gamificationRouter.ts
import express, { Router } from 'express';
import { GamificationController } from '../controllers/gamificationController';

const router = express.Router();

// Route pour obtenir tous les gamifications
router.get('/:id', GamificationController.getAllStatsByUser);

export default router;