# Étape 1 : Construction
FROM node:20.17-slim AS builder

# Définir le répertoire de travail
WORKDIR /

# Copier les fichiers du projet
COPY ./app/package*.json ./
COPY ./app/tsconfig.json ./
COPY ./app/tsconfig.app.json ./
COPY ./app/tsconfig.node.json ./
COPY ./app/vite.config.ts ./
COPY ./app/tailwind.config.js ./
COPY ./app/src ./src
COPY ./app/public ./public
COPY ./app/index.html ./index.html

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
