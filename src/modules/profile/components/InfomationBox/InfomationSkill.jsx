import { Typography } from '@material-tailwind/react';
import React from 'react';
import ProgressBox from './components/ProgressBox';
import InfoStatsBox from './components/InfoStatsBox';

export default function InfomationSkill() {
  return (
    <div className="mt-8">
      <Typography variant="h4" className="uppercase mb-4" color="black">
        KĨ NĂNG CỦA TÔI
      </Typography>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <ProgressBox
            value={100}
            className="text-white bg-orange-500"
            color="orange"
            skillName="HTML"
            label="HTML"
          />
          <ProgressBox
            value={70}
            className="text-white bg-pink-500"
            color="pink"
            skillName="CSS"
            label="CSS"
          />
          <ProgressBox
            value={50}
            className="text-white bg-yellow-500"
            color="yellow"
            skillName="JS"
            label="JS"
          />
          <ProgressBox
            value={80}
            className="text-white bg-orange-500"
            color="orange"
            skillName="React"
            label="React"
          />
        </div>
        <div className="w-full md:w-1/2">
          <InfoStatsBox />
        </div>
      </div>
    </div>
  );
}
