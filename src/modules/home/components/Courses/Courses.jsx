import React, { useEffect, useState } from 'react';
import NewCourses from './NewCourses';
import { getCourseListAPI } from '../../../../apis/courseAPI';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourseListAPI();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="container mt-4">
      <NewCourses courses={courses} />
    </div>
  );
}
