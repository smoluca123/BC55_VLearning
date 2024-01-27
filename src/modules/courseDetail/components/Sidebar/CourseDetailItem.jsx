import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function CourseDetailItem({ label, value, icon: Icon }) {
  return (
    <div>
      <div className="flex justify-between items-center py-6 border-b border-b-gray-300">
        <div className="flex">
          <Typography variant="paragraph">{label}: </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="font-semibold ml-2"
          >
            {value}
          </Typography>
        </div>
        <Icon className="w-6 h-6 text-colorSecondary-main" />
      </div>
    </div>
  );
}
