import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import getPort from 'get-port'; // Import get-port for dynamic port selection

export default defineConfig(async () => {
  // Try to find an available port starting from 3000
  const port = await getPort({ port: 3000 });

  return {
    plugins: [react()],
    server: {
      port: port, // Set the server port dynamically
    },
  };
});
