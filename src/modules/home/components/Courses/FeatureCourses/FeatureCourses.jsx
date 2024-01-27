import { Typography } from '@material-tailwind/react';
import React, { useRef } from 'react';
import CourseItem from '../../../../../components/CourseItem';

export default function FeatureCourses({
  courses,
  cols: _cols,
  limit: _limit = 4,
}) {
  const limit = useRef(_limit);
  const cols = {
    lg: _cols?.lg || 4,
    sm: _cols?.sm || 2,
    default: _cols?.default || 1,
  };
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
      <div
        className={`mt-4 grid grid-cols-${cols.default} sm:grid-cols-${cols.sm} lg:grid-cols-${cols.lg} gap-4`}
      >
        {featureCourses.map((course) => (
          <CourseItem key={course.maKhoaHoc} course={course} />
        ))}
      </div>
    </div>
  );
}
