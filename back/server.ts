import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import schoolRoutes from './routes/schoolRoutes';
import groupeRoutes from './routes/groupRoutes';
import gamificationRoutes from './routes/gamificationRoutes'

const app = express();
const port = 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/groups', groupeRoutes);
app.use('/api/gamifications', gamificationRoutes);

// Serve the frontend
// app.use(express.static('dist')); // Assurez-vous que votre dossier de build de la partie frontend est "dist"

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
