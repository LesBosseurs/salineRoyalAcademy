import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

// Route pour la connexion (login)
router.post('/login', UserController.loginUser);

// Route pour obtenir des utilisateurs par filtre(s)
router.get('/filter', UserController.getUsersByFilters);

// Route pour ajouter un user a un groupe
router.post('/addGroupe', UserController.addUserToGroup);

// Route pour obtenir tous les utilisateurs
router.get('/', UserController.getAllUsers);

// Route pour créer un utilisateur
router.post('/', UserController.createUser);

// Route pour obtenir un utilisateur par ID
router.get('/:id', UserController.getUserById);

// Route pour mettre à jour un utilisateur
router.put('/:id', UserController.updateUser);

// Route pour supprimer un utilisateur
router.delete('/:id', UserController.deleteUser);

// Route pour la déconnexion (logout)
router.post('/disconnect', UserController.disconnectUser);

export default router;
