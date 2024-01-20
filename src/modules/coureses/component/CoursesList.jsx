import { Typography } from '@material-tailwind/react';
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import CourseItem from './CourseItem';

export default function CoursesList() {
  return (
    <div className="container mt-8">
      <Typography variant="h6" className="text-[28px] flex items-cente">
        <FaBookmark className="text-[#ed85ab] text-[24px]" />
        Danh sách khóa học
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  );
}
