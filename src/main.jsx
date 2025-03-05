import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from './SupabaseContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);