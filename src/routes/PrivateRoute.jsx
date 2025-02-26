import React from 'react';
import { useFirebase } from '../FirebaseContext';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-lg text-blue-500"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
