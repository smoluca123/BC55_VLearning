import React, { useEffect, useState } from 'react';
import InfoCourseBox from './InfoCourseBox';
import { Typography } from '@material-tailwind/react';

import CourseLearn from './CourseLearn';
import CourseContent from './CourseContent/CourseContent';

export default function Detail({ course }) {
  const { tenKhoaHoc } = course;

  return (
    <div>
      <Typography variant="h1">{tenKhoaHoc}</Typography>
      <InfoCourseBox course={course} />
      <CourseLearn />
      <CourseContent />
    </div>
  );
}
