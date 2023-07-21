// routers/groupRouter.ts
import express from 'express';
import { GroupController } from '../controllers/groupController';

const router = express.Router();

// Route pour obtenir tous les groupes
router.get('/', GroupController.getAllGroups);

// Route pour obtenir un groupe par ID
router.get('/groups/:id', GroupController.getGroupById);

// Route pour créer un groupe
router.post('/groups', GroupController.createGroup);

// Route pour mettre à jour un groupe par ID
router.put('/groups/:id', GroupController.updateGroup);

// Route pour supprimer un groupe par ID
router.delete('/groups/:id', GroupController.deleteGroup);

export default router;
