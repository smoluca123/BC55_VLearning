import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryCourseList from '../components/CategoryCourseList';

export default function CategoryCourse() {
  const { categoryId } = useParams();
  return (
    <div>
      <CategoryCourseList categoryId={categoryId} />
    </div>
  );
}
