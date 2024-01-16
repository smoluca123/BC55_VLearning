import React from 'react';
import Slider from '../components/Slider';
import CourseBox from '../components/CourseBox';
import Courses from '../components/Courses/Courses';

export default function Home() {
  return (
    <>
      <Slider />
      <CourseBox />
      <Courses />
    </>
  );
}
