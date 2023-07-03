import express from 'express';
import MasterclassController from '../controllers/masterclassController';

const router = express.Router();

// Route pour obtenir tous les utilisateurs
router.get('/', MasterclassController.getAllMasterclass);

export default router;
