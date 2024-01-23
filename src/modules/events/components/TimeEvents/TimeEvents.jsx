import React from 'react';
import { Typography } from '@material-tailwind/react';
export default function TimeEvents() {
  return (
    <div className="text-white font-bold w-full ">
      <div
        className="uppercase font-medium relative  filter grayscale-50 py-40 px-20 h-full"
        style={{
          backgroundImage:
            'url("https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute w-[600px] top-[-10px] right-[-30px] bg-contain z-1">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/high-techbrain.2f38d2ab.png"
            alt=""
          />
        </div>
        <div className=" flex  font-medium items-center opacity-[0.8]	">
          <div className=" pr-6 text-[60px]">
            <Typography variant="h1" className="text-[#ffbe0b] text-[60px]">
              00
            </Typography>
            <Typography variant="h1">
              <Typography variant="h6" className="text-center">
                Ngày
              </Typography>
            </Typography>
          </div>
          <div className="">
            <Typography variant="h1" className="text-[#fb5607] text-[60px]">
              00
            </Typography>
            <Typography variant="h1">
              <Typography variant="h6" className="text-center">
                giờ
              </Typography>
            </Typography>
          </div>

          <div className="px-6 text-[70px]">
            <Typography variant="h1" className="text-[#ff006e] text-[60px]">
              00
            </Typography>
            <Typography variant="h1">
              <Typography variant="h6" className="text-center">
                phút
              </Typography>
            </Typography>
          </div>
          <div className="text-[60px]">
            {' '}
            <Typography
              variant="h1"
              className="text-[#833904] text-[60px] opacity-3"
            >
              00
            </Typography>
            <Typography variant="h1">
              <Typography variant="h6" className="text-center">
                giây
              </Typography>
            </Typography>
          </div>
        </div>

        <div className="text-white uppercase font-bold opacity-[0.7]">
          <Typography variant="h4" className="text-[40px] ">
            Sự kiện công nghệ lớn nhất 2023
          </Typography>
          <Typography variant="h5">17 - 25 THÁNG 01, 2024, VIỆT NAM</Typography>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
