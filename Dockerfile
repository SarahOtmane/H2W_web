# Étape 1 : Construction
FROM node:20.17-slim AS builder

# Définir le répertoire de travail
WORKDIR /

# Copier les fichiers du projet
COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.app.json ./
COPY ./tsconfig.node.json ./
COPY ./vite.config.ts ./
COPY ./src ./src
COPY ./public ./public
COPY ./index.html ./index.html

# Installer les dépendances
RUN npm install

# Construire le projet pour la production
RUN npm run build

# Étape 2 : Serveur léger pour la production
FROM nginx:alpine

# Copier les fichiers construits dans le dossier Nginx
COPY --from=builder /dist /usr/share/nginx/html

# Exposer le port
EXPOSE 80

# Commande par défaut pour Nginx
CMD ["nginx", "-g", "daemon off;"]
