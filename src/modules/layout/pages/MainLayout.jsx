import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <div className="pt-[60px] z-[-1]">
        <Outlet />
      </div>
    </div>
  );
}
