import express, { Request, Response } from 'express';
import cors from 'cors';
import { Client } from 'pg'

const app = express();
const port = 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/titi', async (req: Request, res: Response) => {
  console.log('titi')
  res.json({toto:"titi"})
});

// Routes
app.post('/api/signup', async (req: Request, res: Response) => {
  const { username, password } = req.query;
  console.log({ username, password })

    const client = new Client({
      host: 'db',
      user: 'your_username',
      password: 'your_password',
      database: 'your_database'
    })

    await client.connect()

    let query = `SELECT * from toto`

    client.query(query, (err, resz) => {
      client.end();
      res.json({ success: true, message: 'User created successfully', resz })
    })

  
});

// Serve the frontend
app.use(express.static('dist')); // Assurez-vous que votre dossier de build de la partie frontend est "dist"

// Lancer le serveur
app.listen(port, () => {
  try {
    
  const client = new Client({
    host: 'db',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
  })

  client.connect().then(() => {
    // let query = `CREATE TABLE IF NOT EXIST toto (
    //   id SERIAL PRIMARY KEY,
    //   username VARCHAR(255) NOT NULL,
    //   password VARCHAR(255) NOT NULL
    // );`
    
    // client.query(query, (err, res) => {
    //   client.end()
    // })

  //     const query = `INSERT INTO toto (username, password) VALUES ('john_doe', 'motdepasse123');`
  // client.query(query, (err, res) => {
  //     client.end()
  //   })

  // client.end()
  })
} catch (error) {
  console.error({db: error})    
}

  
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
