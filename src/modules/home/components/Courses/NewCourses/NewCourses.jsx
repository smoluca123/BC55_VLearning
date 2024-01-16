import { Typography } from '@material-tailwind/react';
import React, { useRef } from 'react';
import NewCoursesList from './NewCoursesList';

export default function NewCourses({ courses }) {
  const limit = useRef(4);
  const newCourses =
    courses.length >= limit.current ? courses.slice(0, limit.current) : courses;
  return (
    <div>
      <Typography variant="h3" className="text-colorSecondary-main">
        Khóa học mới
      </Typography>
      <NewCoursesList newCourses={newCourses} />
    </div>
  );
}
