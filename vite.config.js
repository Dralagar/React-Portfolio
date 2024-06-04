import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change this if you need a different port
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'], // Only include necessary dependencies for optimization
  },
  build: {
    // Custom build options if necessary
  },
  resolve: {
    alias: {
      // Example alias setup if needed
      '@': '/src',
    },
  },
});

