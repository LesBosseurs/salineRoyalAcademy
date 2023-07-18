import express from 'express';
import MasterclassesController from '../controllers/masterclassesController';

const router = express.Router();

// Route pour obtenir toutes les masterclasses
router.get('/:token', MasterclassesController.getAllMasterclasses);

// Route pour obtenir une masterclass par ID
router.get('/getMasterclassByID/:masterclassId/:token', MasterclassesController.getMasterclassByID);

// Route pour obtenir des utilisateurs par filtre(s)
router.get('/filter', MasterclassesController.getMasterclassesByFilters);

// Route pour créer un masterclass
router.post('/createMasterclass', MasterclassesController.createMasterclass);

// Route pour delete un masterclass
router.post('/deleteMasterclass', MasterclassesController.deleteMasterclass);

// Route pour mettre à jour un utilisateur
router.put('/:id', MasterclassesController.updateMasterclass);

// Route pour recuperer tous les medias d'une masterclass
router.post('/deleteMasterclass', MasterclassesController.deleteMasterclass);

// Route suivi de tous les cours d'un user
router.get('/suivi/:token', MasterclassesController.getAllSuiviMasterclasses);

export default router;