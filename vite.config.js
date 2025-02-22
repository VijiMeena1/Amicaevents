import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Change this to any fixed port number you prefer
    strictPort: true // Ensures Vite doesn't switch to another port if 5174 is unavailable
  }
});
