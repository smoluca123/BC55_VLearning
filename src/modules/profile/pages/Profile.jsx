import { Typography } from '@material-tailwind/react';
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import { useSelector } from 'react-redux';
import Infomation from '../components/Infomation';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="py-8">
      <div className="bg-yellow-600 py-12 text-white">
        <div className="container">
          <Typography variant="h1" className="uppercase">
            THÔNG TIN CÁ NHÂN
          </Typography>
          <Typography variant="small" className="uppercase">
            Thông tin học viên
          </Typography>
        </div>
      </div>
      <div className="container mt-8 py-8 bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <ProfileCard />
          </div>
          <div className="md:w-3/4">
            <Infomation />
          </div>
        </div>
      </div>
    </div>
  );
}
