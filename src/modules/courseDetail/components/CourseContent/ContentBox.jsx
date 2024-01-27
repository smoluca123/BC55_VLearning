import { ClockIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import ContentItem from './ContentItem';

export default function ContentBox({ title, contentList }) {
  return (
    <div className="mt-8">
      <div className="flex gap-4 items-center bg-gray-100 p-4">
        <Typography className="text-lg uppercase">{title}</Typography>
        <Button
          variant="outlined"
          className="uppercase text-primary-main border-primary-main hover:text-white hover:bg-primary-main"
        >
          Xem trước
        </Button>
      </div>

      <div className="mt-4">
        {contentList.map((content, index) => (
          <ContentItem content={content} />
        ))}
      </div>
    </div>
  );
}
