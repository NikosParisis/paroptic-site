import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // <-- Εδώ πρέπει να είναι "./" για να βρίσκει τα assets
  build: {
    outDir: 'dist'
  }
});
