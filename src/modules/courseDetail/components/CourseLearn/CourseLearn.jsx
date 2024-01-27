import { Typography } from '@material-tailwind/react';
import React from 'react';
import LearnList from './LearnList';

export default function CourseLearn() {
  return (
    <div>
      <Typography variant="h3">Những gì bạn sẽ học</Typography>
      <LearnList />
    </div>
  );
}
