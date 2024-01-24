import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function SpeakerItem({
  nameSpeecher,
  position,
  url,
  className: classname,
}) {
  return (
    <div className="relative w-full">
      <div className="w-full h-full group">
        <div className=" group-hover:opacity-70 transition-opacity duration-300 ease-in-out mx-[2rem]">
          <img src={url} alt="" className="w-full h-full" />
        </div>

        <div
          className={`text-white uppercase font-medium py-4 mx-[2rem] ${classname}`}
        >
          <div className="group-hover:pointer-events-none ">
            <Typography variant="h6" className="font-bold py-2">
              {nameSpeecher}
            </Typography>
            <Typography variant="paragraph">{position}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
