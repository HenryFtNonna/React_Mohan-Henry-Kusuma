import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    // Simpan lokasi yang ingin diakses pengguna
    localStorage.setItem('redirectAfterLogin', location.pathname);
    // Arahkan ke halaman login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;