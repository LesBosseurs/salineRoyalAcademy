import express from 'express';
import MasterclassController from '../controllers/masterclassController';

const router = express.Router();

router.get('/', MasterclassController.getAllMasterclasses);
router.get('/:id', MasterclassController.getMasterclassById);
router.get('/user/:id', MasterclassController.getMasterclassByUserId);
router.post('/', MasterclassController.createMasterclass);
router.put('/:id', MasterclassController.updateMasterclass);
router.delete('/:id', MasterclassController.deleteMasterclass);

export default router;
