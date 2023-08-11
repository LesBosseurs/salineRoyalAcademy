// routers/groupRouter.ts
import express from 'express';
import { GroupController } from '../controllers/groupController';

const router = express.Router();



// Route pour obtenir un groupe par ID
router.get('/:id', GroupController.getGroupById);

// Route pour créer un groupe
router.post('/addGroup', GroupController.createGroup);

// Route pour mettre à jour un groupe par ID
router.put('/:id', GroupController.updateGroup);

// Route pour supprimer un groupe par ID
router.delete('/:id', GroupController.deleteGroup);

// Route pour obtenir tous les groupes
router.get('/', GroupController.getAllGroups);

export default router;
