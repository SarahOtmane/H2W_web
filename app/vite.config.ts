import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(),],
  server: {
    host: "0.0.0.0", // Permet d'accéder au serveur depuis l'extérieur du conteneur
    port: 5173, // Assure que Vite écoute sur ce port
    watch: {
      usePolling: true, // Active la détection des changements dans Docker
    },
  },
});