# Utilisez une image de base contenant Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances du backend
RUN npm install

# Copiez le reste des fichiers du backend dans le conteneur
COPY . .

# Exposez le port 4000 pour le backend Express
EXPOSE 4000

# Démarrez le backend Express
CMD ["npm", "start"]
