import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function CourseStatsItem({
  title,
  icon,
  stats,
  className: _class,
}) {
  return (
    <div
      className={
        'flex flex-col justify-center items-center text-center py-6 ' + _class
      }
    >
      <Typography variant="h6" className="uppercase">
        {title}
      </Typography>
      <span className="">
        {/* <MdComputer className="text-4xl text-white" /> */}
        {icon}
      </span>
      <span className="text-[24px] font-weight-500">{stats}</span>
    </div>
  );
}
