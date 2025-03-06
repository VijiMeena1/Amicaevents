import React from 'react';
import { useAuth } from '../SupabaseContext';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading...</p>; // ✅ Prevents premature redirection

  return user ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;
