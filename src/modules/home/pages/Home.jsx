import React from 'react';
import Slider from '../components/Slider';
import CourseBox from '../components/CourseBox';
import Courses from '../components/Courses/Courses';
import Stats from '../components/Stats/Stats';
import Lectures from '../components/Lecturers/Lectures';
import Evaluation from '../components/Evaluation';

export default function Home() {
  return (
    <>
      <Slider />
      <CourseBox />
      <Courses />
      <Stats />
      <Lectures />
      <Evaluation />
    </>
  );
}
