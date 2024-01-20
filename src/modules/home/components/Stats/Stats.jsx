import React from 'react';
import StatsBox from './StatsBox';

const listStats = [
  { img: '/assets/img/003-students.png', stats: 9000, text: 'Học viên' },
  { img: '/assets/img/001-timetable.png', stats: 1000, text: 'Khóa học' },
  { img: '/assets/img/002-hourglass.png', stats: 33200, text: 'Giờ học' },
  { img: '/assets/img/004-teacher.png', stats: 400, text: 'Giảng viên' },
];
export default function Stats() {
  return (
    <div className="py-16 bg-[#f0f8ff]">
      <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {listStats.map((item, index) => (
          <StatsBox key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
