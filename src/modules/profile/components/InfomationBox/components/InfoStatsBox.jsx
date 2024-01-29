import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  SignalIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import React from 'react';

const stats = [
  {
    label: 'Giờ học',
    value: '80',
    icon: UserIcon,
  },
  {
    label: 'Điểm tổng',
    value: '95',
    icon: AcademicCapIcon,
  },
  {
    label: 'Buổi học',
    value: '84',
    icon: CalendarIcon,
  },
  {
    label: 'Cấp độ',
    value: 'Trung cấp',
    icon: ChartBarIcon,
  },
  {
    label: 'Học lực',
    value: 'Giỏi',
    icon: AcademicCapIcon,
  },
  {
    label: 'Bài tập',
    value: '100',
    icon: BookOpenIcon,
  },
];
export default function InfoStatsBox() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(({ label, value, icon: Icon }, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-primary-main text-white rounded-xl py-2"
        >
          <div className="mr-2">
            <Icon className="w-6 h-6" />
          </div>
          <div className="">
            <Typography variant="h6" className="">
              {label}
            </Typography>
            <Typography variant="paragraph" className="">
              {value}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
