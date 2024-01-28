import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function BannerAbout() {
  const style = {
    backgroundImage:
      'url(https://demo2.cybersoft.edu.vn/static/media/bgAbout.19ac825c.png)',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div>
      <div className="relative py-[200px]" style={style}>
        <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <div className="text-center">
            <Typography variant="h4" className="text-primary-main">
              V LEARNING HỌC LÀ VUI
            </Typography>
            <Typography
              variant="h1"
              className="text-colorSecondary-main text-[3rem]"
            >
              Cùng nhau khám phá nhưng điều mới mẻ
            </Typography>
            <Typography variant="h4" className="text-white">
              Học đi đôi với hành
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
