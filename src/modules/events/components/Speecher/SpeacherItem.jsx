import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function SpeakerItem({
  nameSpeecher,
  position,
  url,
  className: _classname,
}) {
  return (
    <div className="">
      <div className="">
        <div className="hover:opacity-70 transition-opacity duration-300 ease-in-out">
          <img src={url} alt="" className="w-full h-full" />
        </div>

        <div className={`text-white uppercase font-medium py-4 ${_classname}`}>
          <div className="">
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
