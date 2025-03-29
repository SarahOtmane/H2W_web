# Étape 1 : Construction
FROM node:20.17-slim AS dev

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour installer les dépendances
COPY ./app/package*.json ./
COPY ./app/tsconfig.json ./
COPY ./app/tsconfig.app.json ./
COPY ./app/tsconfig.node.json ./
COPY ./app/vite.config.ts ./
COPY ./app/postcss.config.mjs ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY ./app ./

# Activer le hot reload en Docker
ENV CHOKIDAR_USEPOLLING=true
ENV HOST=0.0.0.0

# Exécuter Vite en mode développement
CMD ["npm", "run", "dev"]





# Étape 2 : Build pour la production
FROM node:20.17-slim AS builder
WORKDIR /app
COPY --from=dev /app /app
RUN npm run build




# Étape 2 : Serveur Nginx pour la production
FROM nginx:alpine

# Copier les fichiers construits dans le dossier Nginx
COPY --from=builder /dist /usr/share/nginx/html

# Exposer le port
EXPOSE 80

# Commande par défaut pour Nginx
CMD ["nginx", "-g", "daemon off;"]
