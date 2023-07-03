import express, { Request, Response } from 'express';
import cors from 'cors';
import { Client } from 'pg'
import userRoutes from './routes/userRoutes';
import masterclassRoutes from './routes/masterclassRoutes';
import pool from './db/database';

const app = express();
const port = 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/masterclass', masterclassRoutes);

// Serve the frontend
// app.use(express.static('dist')); // Assurez-vous que votre dossier de build de la partie frontend est "dist"

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
