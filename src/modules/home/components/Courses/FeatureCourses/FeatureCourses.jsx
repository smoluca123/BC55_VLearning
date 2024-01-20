import { Typography } from '@material-tailwind/react';
import React, { useRef } from 'react';
import CourseItem from '../components/CourseItem';

export default function FeatureCourses({ courses }) {
  const limit = useRef(4);
  const featureCourses =
    courses.lenght < limit.current
      ? courses
      : courses
          .sort((prev, course) => {
            return course.luotXem - prev.luotXem;
          })
          .slice(0, limit.current);
  return (
    <div className="mt-8">
      <Typography variant="h3" className="text-primary-main">
        Khóa học phổ biến
      </Typography>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureCourses.map((course) => (
          <CourseItem key={course.maKhoaHoc} course={course} />
        ))}
      </div>
    </div>
  );
}
