import { Typography } from '@material-tailwind/react';
import React from 'react';
import LecturesList from './LecturesList';

export default function Lectures() {
  return (
    <div className="my-8 container">
      <Typography variant="h3">Giảng viên hàng đầu</Typography>
      <LecturesList />
    </div>
  );
}
