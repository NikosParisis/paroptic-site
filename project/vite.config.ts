import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'  // Διασφαλίζει ότι το index.html θα συμπεριληφθεί στο build
    }
  }
});
