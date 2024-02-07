import React from 'react';
import CourseItem from './components/CourseItem';

export default function MyCourseItem({ course, fetchCourse }) {
  return (
    <div className="">
      <CourseItem course={course} fetchCourse={fetchCourse} />
    </div>
  );
}
