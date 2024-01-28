import React from 'react';
import { Outlet } from 'react-router-dom';

export default function User() {
  return (
    <div className="pt-[80px] min-h-screen min-w-screen bg-[url('https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/6057300-e1656066696312.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="mt-[-80px] w-full">
        <Outlet />
      </div>
    </div>
  );
}
