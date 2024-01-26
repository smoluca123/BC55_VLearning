import React from 'react';
import Auth from '../components/Auth/Auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function User() {
  const { currentUser } = useSelector((state) => state.auth);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="pt-[80px] min-h-screen min-w-screen bg-[url('https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/6057300-e1656066696312.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="mt-[-80px] w-full">
        <Auth />
      </div>
    </div>
  );
}
