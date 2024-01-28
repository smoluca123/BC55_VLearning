import React from 'react';
import { Typography, Button } from '@material-tailwind/react';

export default function TimeBodyCourse({ icon, number }) {
  return (
    <div className="flex ">
      <div className="flex items-center flex-row-reverse">
        <div className="flex mx-2 items-center ">
          <Button className="p-1 rounded-full bg-transparent text-[#41b294]">
            {icon}
          </Button>
          <Typography variant="paragraph">{number}</Typography>
        </div>
      </div>
    </div>
  );
}
