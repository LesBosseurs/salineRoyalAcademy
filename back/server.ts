import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import schoolRoutes from './routes/schoolRoutes';
import groupeRoutes from './routes/groupRoutes';
import gamificationRoutes from './routes/gamificationRoutes'
import GamificationService from './service/gamificationService';
import { Server/* , Socket */ } from "socket.io";
/* const { Server } = require("socket.io"); */
const http = require("http");
require('dotenv').config();



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

// SOCKET SERVER

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {

  console.log("Nouveau client connecté")
  const room = socket.id + process.env.SOCKET_SECRET

  socket.on("joinRoom", () => {
    socket.join(room);
  });

  socket.on("updateBadges", async (data: { id: Number }) => {
    const user_id = data.id;
    try {
      const updateUserBadges = await GamificationService.updateUserBadges(user_id);
      if(updateUserBadges.length > 0) {
        socket.to(room).emit("receive_user_badges_notification", updateUserBadges);
      }
    } catch (error) {
      console.error(`Error update user's badges for the user : ${user_id}`, error);
    }
  });

});

server.listen(3031, () => {
  console.log("SERVER SOCKET RUNNING");
});

