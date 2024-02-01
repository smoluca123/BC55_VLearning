import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function PrivateRouter({ children }) {
  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!currentUser) {
    const url = location.pathname;
    return <Navigate to={`/user?page=login&from=${url}`} replace />;
    // return <Navigate to="/login" replace />;
  }
  return children || <Outlet />;
}
