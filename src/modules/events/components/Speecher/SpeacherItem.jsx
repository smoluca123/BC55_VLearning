import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function SpeakerItem({
  nameSpeecher,
  position,
  url,
  className: classname,
}) {
  return (
    <div className="relative w-full  overflow-hidden">
      <div className="w-full h-full group">
        <div
          className={`w-380 h-300 group-hover:opacity-80 transition-opacity duration-300 ease-in-out`}
        >
          <img src={url} alt="" className="w-full h-full" />
        </div>
        <div
          className={`absolute w-1/6 h-[342px] top-0 left-full bg-gradient-to-r from-transparent to-white transform skew-x-[-25deg] transition-all duration-750 group-hover:left-0`}
        ></div>
        <div className={`text-white uppercase font-medium py-6 ${classname}`}>
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
