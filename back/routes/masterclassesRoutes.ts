import express from 'express';
import MasterclassesController from '../controllers/masterclassesController';

const router = express.Router();

// Route pour obtenir toutes les masterclasses
router.get('/', MasterclassesController.getAllMasterclasses);

// Route pour obtenir une masterclass par ID
router.get('/getMasterclassByID/:masterclassId', MasterclassesController.getMasterclassByID);

// Route pour créer un masterclass
router.post('/createMasterclass', MasterclassesController.createMasterclass)

// Route pour delete un masterclass
router.post('/deleteMasterclass', MasterclassesController.deleteMasterclass)

// Route pour mettre à jour un utilisateur
router.put('/:id', MasterclassesController.updateMasterclass);

// Route pour recuperer tous les medias d'une masterclass
router.post('/deleteMasterclass', MasterclassesController.deleteMasterclass)

// Route qui permet de recuperer toutes les masterclass par rapport a ses auteurs/participants


export default router;