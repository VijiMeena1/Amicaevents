import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keep the port as 3000
    strictPort: true // Ensures Vite doesn't switch to another port if 3000 is unavailable
  }
});
