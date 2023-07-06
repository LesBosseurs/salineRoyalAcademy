import express from 'express';
import ProgramsController from '../controllers/programsController';

const router = express.Router();

// Route pour obtenir tous les programs
router.get('/', ProgramsController.getAllPrograms);

// Route pour obtenir un programs grace a l'ID (avec ses masterclass)
router.get('/:id', ProgramsController.getProgramsById);

// Route pour supprimer un programs
router.get('/deleteProgram', ProgramsController.deleteProgram);

export default router;