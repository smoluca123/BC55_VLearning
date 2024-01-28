import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter({ children }) {
  const { currentUser } = useSelector((state) => state.auth);
  if (!currentUser) return <Navigate to="/login" replace />;
  return children || <Outlet />;
}
