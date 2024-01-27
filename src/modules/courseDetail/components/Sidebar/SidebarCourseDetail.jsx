import React from 'react';
import CourseDetailItem from './CourseDetailItem';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  FilmIcon,
} from '@heroicons/react/24/solid';

const details = [
  {
    label: 'Ghi danh',
    value: '10 học viên',
    icon: AcademicCapIcon,
  },
  {
    label: 'Thời gian',
    value: '18 giờ',
    icon: ClockIcon,
  },
  {
    label: 'Bài học',
    value: '10',
    icon: BookOpenIcon,
  },
  {
    label: 'Video',
    value: '14',
    icon: FilmIcon,
  },
  {
    label: 'Trình độ',
    value: 'Người mới bắt đầu',
    icon: AcademicCapIcon,
  },
];
export default function SidebarCourseDetail() {
  return (
    <div>
      {details.map((detail, index) => (
        <CourseDetailItem key={index} {...detail} />
      ))}
    </div>
  );
}
