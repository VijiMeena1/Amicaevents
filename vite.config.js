import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import getPort from 'get-port';
import path from 'path'; // Import path module

export default defineConfig(async () => {
  const port = await getPort({ port: 3000 });

  return {
    plugins: [react()],
    server: {
      port: port,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Make "@/assets" point to "src/assets"
      },
    },
  };
});
