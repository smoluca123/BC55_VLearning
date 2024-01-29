import React from 'react';
import CourseItem from './components/CourseItem';

export default function MyCourseItem({ course }) {
  return (
    <div className="">
      <CourseItem course={course} />
    </div>
  );
}
