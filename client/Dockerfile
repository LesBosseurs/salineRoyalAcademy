# Utilisez une image de base contenant Node.js
FROM node:19

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

ENV WATCHPACK_POLLING=true

# Copiez le reste des fichiers du frontend dans le conteneur
COPY . .
# Installez les dépendances du frontend
RUN npm install

# Exposez le port 3000 pour le frontend Next.js
EXPOSE 3000

# Démarrez le serveur Next.js
CMD [ "npm", "run", "dev" ]
