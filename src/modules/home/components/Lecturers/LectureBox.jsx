import { StarIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function LectureBox({ lecture }) {
  const rateCount = Math.round(lecture.rate);

  return (
    <div className="text-center shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 mb-8 cursor-grabbing rounded-md">
      {lecture.avatar}
      <div className="mt-4">
        <Typography variant="h5">{lecture.name}</Typography>
        <Typography
          variant="paragraph"
          className="mt-2 h-12 max-h-12 w-full sm:w-3/4 mx-auto truncate whitespace-pre-line line-clamp-2"
        >
          {lecture.bio}
        </Typography>
      </div>
      <div className="mt-4">
        <div className="flex justify-center relative">
          {/* cộng điểm cho e nha a Trường :)) */}
          {Array.from({ length: rateCount }).map((item, index) => (
            <StarIcon
              key={Math.random() * index}
              className="w-6 h-6 text-colorSecondary-main"
            />
          ))}

          {Array.from({ length: 5 - rateCount }).map((item, index) => (
            <StarIcon
              key={Math.random() * index}
              className="w-6 h-6 text-gray-400"
            />
          ))}
          <Typography
            variant="small"
            className="text-primary-main absolute -top-4 right-5"
          >
            ({lecture.rate})
          </Typography>
        </div>
        <Typography variant="small" className="mt-2 font-medium text-gray-600">
          {lecture.rateCount} đánh giá
        </Typography>
      </div>
    </div>
  );
}
