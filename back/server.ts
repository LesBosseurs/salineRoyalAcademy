import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.post('/api/signup', (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log({username, password})

  // Effectuez ici votre logique de création d'utilisateur ou autre traitement

  res.json({ success: true, message: 'User created successfully' });
});

// Serve the frontend
app.use(express.static('dist')); // Assurez-vous que votre dossier de build de la partie frontend est "dist"

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
