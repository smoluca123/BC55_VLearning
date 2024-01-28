import React from 'react';
import { Typography } from '@material-tailwind/react';
export default function BlogTitle() {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#ffd60a] my-16 py-12 w-full text-white ">
        <div className="px-12">
          <Typography variant="h3" className="uppercase ">
            BLOG
          </Typography>

          <Typography variant="paragraph" className="uppercase font-medium">
            Thông tin công nghệ số!!!
          </Typography>
        </div>
      </div>
    </div>
  );
}
