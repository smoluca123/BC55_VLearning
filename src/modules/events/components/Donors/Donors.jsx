import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function Donors() {
  let donorsData = [
    {
      image: 'https://demo2.cybersoft.edu.vn/static/media/meta.10fa2fa1.jpg',
      title: 'FaceBook',
    },
    {
      image:
        'https://demo2.cybersoft.edu.vn/static/media/microsoft.318b3280.jpg',
      title: 'Microsoft',
    },
    {
      image:
        'https://demo2.cybersoft.edu.vn/static/media/Google-logo.f11902b5.jpg',
      title: 'Google',
    },
    {
      image: 'https://demo2.cybersoft.edu.vn/static/media/amazon.996890c4.jpg',
      title: 'Amazon',
    },
  ];

  return (
    <div className="mt-20 ">
      <Typography
        variant="h2"
        className="pb-10 text-center text-colorSecondary-main"
      >
        Nhà tài trợ chương trình
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 	">
        {donorsData.map(({ classname, image, title }) => {
          return (
            <div className="px-4">
              <img
                src={image}
                alt=""
                className="w-full h-[200px] rounded-xl object-cover"
              />
              <Typography
                variant="h3"
                className="text-center uppercase text-[18px] py-6"
              >
                {title}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
