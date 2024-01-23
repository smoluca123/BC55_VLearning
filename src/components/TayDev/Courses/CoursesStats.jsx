import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FaCamera, FaPlayCircle, FaDiceD20, FaBookmark } from 'react-icons/fa';
import { FaBriefcase, FaBook } from 'react-icons/fa6';
import CourseItem from './CourseItem';
import { Typography } from '@material-tailwind/react';
import CourseStatsItem from './CourseStatsItem';

const coursesStatsData = [
  {
    title: 'CHƯƠNG TRÌNH HỌC',
    icon: <MdComputer className="text-4xl text-white" />,
    stats: 300,
    background: 'bg-[#264653]',
  },
  {
    title: 'Nhà sáng tạo',
    icon: <FaCamera className="text-4xl text-white" />,
    stats: 10000,
    background: 'bg-primary-main',
  },
  {
    title: 'Nhà thiết kế',
    icon: <FaBriefcase className="text-4xl text-white" />,
    stats: 400,
    background: 'bg-colorSecondary-main',
  },
  {
    title: 'Bài giảng',
    icon: <FaBook className="text-4xl text-white" />,
    stats: 3000,
    background: 'bg-[#f4a261]',
  },
  {
    title: 'Video',
    icon: <FaPlayCircle className="text-4xl text-white" />,
    stats: 40000,
    background: 'bg-[#ee8959]',
  },
  {
    title: 'Lĩnh vực',
    icon: <FaDiceD20 className="text-4xl text-white" />,
    stats: 200,
    background: 'bg-[#e76f51]',
  },
];
export default function CoursesStats() {
  return (
    <div className="w-full">
      <div className="bg-[#ffd60a] my-16 py-12 w-full text-white ">
        <div className="px-12 md:px-24">
          <Typography variant="h3" className="uppercase ">
            Khoá học
          </Typography>

          <Typography variant="paragraph" className="uppercase font-medium">
            Bắt đầu hành trình nào!!!
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 uppercase font-bold my-4 text-white mx-8 flex-wrap">
        {coursesStatsData.map(({ title, icon, stats, background }) => {
          return (
            <CourseStatsItem
              className={background}
              title={title}
              icon={icon}
              stats={stats}
            />
          );
        })}
      </div>
      <div className="py-12 mx-8">
        <Typography variant="h6" className="text-[28px] flex items-cente">
          <FaBookmark className="text-[#ed85ab] text-[24px]" />
          Danh sách khóa học
        </Typography>
        <div className="flex">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
}
