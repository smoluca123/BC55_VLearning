import { ClockIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function ContentItem({ content }) {
  return (
    <>
      <div className="flex mt-2 border-b py-2 border-b-gray-100 cursor-pointer shadow-none hover:shadow-sm transition-shadow duration-300">
        <PlayCircleIcon className="w-6 h-6 text-primary-main mr-2" />
        <Typography variant="paragraph">{content}</Typography>
        <div className="flex gap-2 items-center ml-auto">
          <ClockIcon className="w-6 h-6 text-primary-main" />
          <Typography variant="paragraph" className="text-gray-600">
            14:35
          </Typography>
        </div>
      </div>
    </>
  );
}
