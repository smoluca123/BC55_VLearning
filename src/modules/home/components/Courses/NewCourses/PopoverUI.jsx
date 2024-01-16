import {
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
  InformationCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
export default function PopoverUI({ children, course }) {
  const [openPopover, setOpenPopover] = useState(false);

  const {
    moTa,
    hinhAnh,
    tenKhoaHoc,
    nguoiTao: { hoTen },
  } = course;

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover
      open={openPopover}
      handler={setOpenPopover}
      placement="right"
      offset={50}
    >
      <PopoverHandler {...triggers}>{children}</PopoverHandler>
      <PopoverContent
        {...triggers}
        className="z-50 w-[20rem] hidden md:block border-2 border-primary-main shadow-lg"
      >
        <div className="mb-2 flex items-center justify-between gap-4">
          <Avatar
            size="md"
            variant="circular"
            src="/assets/img/avatar2.png"
            alt="tania andrew"
          />
          <Button
            variant="gradient"
            size="sm"
            className="font-medium capitalize"
          >
            Follow
          </Button>
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex items-center gap-2 font-medium"
        >
          <span>{hoTen}</span> •{' '}
          <a href="#" className="text-md font-medium text-gray-900">
            @cybersoft.edu.vn
          </a>
        </Typography>
        <Typography variant="h3" color="black">
          {tenKhoaHoc}
        </Typography>
        <img src={hinhAnh} className="h-[200px] w-full object-contain" />
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-blue-gray-500 w-full break-words truncate text-ellipsis whitespace-pre-line overflow-hidden !line-clamp-5"
        >
          {moTa}
        </Typography>
        <div className="flex justify-between">
          <Typography variant="paragraph" className="flex place-items-center">
            <ClockIcon className="w-6 h-6 text-colorSecondary-main mr-2" /> 8
            giờ
          </Typography>
          <Typography variant="paragraph" className="flex place-items-center">
            <CalendarDaysIcon className="w-6 h-6 text-red-300 mr-2" /> 4 tuần
          </Typography>
          <Typography variant="paragraph" className="flex place-items-center">
            <ChartBarIcon className="w-6 h-6 text-light-blue-300 mr-2" /> Tất cả
          </Typography>
        </div>
        <div className="mt-6 flex justify-between items-center gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-2 text-sm font-normal text-blue-gray-500"
          >
            <StarIcon className="text-colorSecondary-main w-6 h-6" />5
          </Typography>
          <Button className="flex place-items-center bg-primary-main text-white">
            <InformationCircleIcon className="text-white w-6 h-6 mr-2" />
            Chi tiết
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
