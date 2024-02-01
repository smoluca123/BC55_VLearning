import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Home from '../modules/home/pages/Home';

export default function PrivateAdminRouter({ children }) {
  const { currentUser } = useSelector((state) => state.auth);
  const { maLoaiNguoiDung } = currentUser;
  if (maLoaiNguoiDung != 'GV') {
    return <Home />;
  }
  return children || <Outlet />;
}
