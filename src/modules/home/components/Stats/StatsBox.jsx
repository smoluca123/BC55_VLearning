import { Typography } from '@material-tailwind/react';
import React from 'react';
import CountUp from 'react-countup';

export default function StatsBox({ img, stats, text }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={img} alt="" className="w-20" />
      <Typography variant="h1" className="text-primary-main font-black my-2">
        <CountUp end={stats} duration={5} enableScrollSpy={true} />
      </Typography>
      <Typography variant="h6">{text}</Typography>
    </div>
  );
}
