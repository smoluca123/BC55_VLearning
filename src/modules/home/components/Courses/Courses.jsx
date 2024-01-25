import React, { useEffect, useState } from 'react';
import NewCourses from './NewCourses';
import { getCourseListAPI } from '../../../../apis/courseAPI';
import FeatureCourses from './FeatureCourses/FeatureCourses';
import CategoryCourses from './CategoryCourses/';

export default function Courses() {
  const [courses, setCourses] = useState(null);

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
      {courses && (
        <>
          <NewCourses courses={courses} />
          <FeatureCourses courses={courses} />
          <CategoryCourses courses={courses} />
        </>
      )}
    </div>
  );
}
