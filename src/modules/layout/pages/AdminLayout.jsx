import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarNavigate from '../../admin/components/SidebarNavigate';

export default function AdminLayout() {
  return (
    <div className="">
      <SidebarNavigate />
      <Outlet />
    </div>
  );
}
