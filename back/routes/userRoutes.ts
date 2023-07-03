import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

// Route pour obtenir tous les utilisateurs
router.get('/', UserController.getAllUsers);

// Route pour obtenir un utilisateur par ID
router.get('/:id', UserController.getUserById);

// Route pour créer un utilisateur
router.post('/', UserController.createUser);

// Route pour mettre à jour un utilisateur
router.put('/:id', UserController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', UserController.deleteUser);

export default router;
