import express from 'express';
import SchoolController from '../controllers/schoolController';

const router = express.Router();

// Route pour obtenir tous les établissements scolaires
router.get('/', SchoolController.getAllSchools);

// Route pour obtenir des utilisateurs par filtre(s)
router.get('/filter', SchoolController.getSchoolsByFilters);

// Route pour obtenir un établissement scolaire par ID
router.get('/:id', SchoolController.getSchoolById);

// Route pour créer un établissement scolaire
router.post('/', SchoolController.createSchool);

// Route pour mettre à jour un établissement scolaire
router.put('/:id', SchoolController.updateSchool);

// Route pour supprimer un établissement scolaire
router.delete('/:id', SchoolController.deleteSchool);

export default router;
