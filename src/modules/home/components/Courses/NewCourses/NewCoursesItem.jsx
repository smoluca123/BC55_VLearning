import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from '@material-tailwind/react';
import PopoverUI from './PopoverUI';
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
export default function NewCoursesItem({ course }) {
  const formatVND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const {
    tenKhoaHoc,
    hinhAnh,
    moTa,
    nguoiTao: { hoTen },
    danhMucKhoaHoc: { tenDanhMucKhoaHoc },
  } = course;
  return (
    <div>
      <PopoverUI>
        <Card className="mt-6 w-full hover:-translate-y-1 transition-transform duration-500">
          <CardHeader
            color="white"
            className="relative h-[200px] flex justify-center items-center"
          >
            <img
              src={hinhAnh}
              alt="card-image"
              className="object-cover w-full align-middle"
            />
          </CardHeader>
          <CardBody className="relative">
            <span className="badge bg-black rounded-none absolute top-0 -translate-y-1/2 p-4 rounded-tr-lg rounded-br-lg -mx-2 text-white">
              {tenDanhMucKhoaHoc}
            </span>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 break-words truncate"
              title={tenKhoaHoc}
            >
              {tenKhoaHoc}
            </Typography>
            <Typography
              variant="paragraph"
              className="min-h-[150px] h-auto w-full break-words truncate text-ellipsis whitespace-pre-line overflow-hidden !line-clamp-5"
            >
              {moTa}
            </Typography>
            {/*  */}
            <div className="flex justify-between">
              <Typography
                variant="paragraph"
                className="flex place-items-center"
              >
                <ClockIcon className="w-6 h-6 text-colorSecondary-main mr-2" />{' '}
                8 giờ
              </Typography>
              <Typography
                variant="paragraph"
                className="flex place-items-center"
              >
                <CalendarDaysIcon className="w-6 h-6 text-red-300 mr-2" /> 4
                tuần
              </Typography>
              <Typography
                variant="paragraph"
                className="flex place-items-center"
              >
                <ChartBarIcon className="w-6 h-6 text-light-blue-300 mr-2" />{' '}
                Tất cả
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0 flex place-items-center justify-between">
            <div className="flex place-items-center">
              <Avatar src={`/assets/img/avatar2.png`} />
              <Typography
                variant="h6"
                color="blue-gray"
                className="ml-2 text-sm"
              >
                {hoTen}
              </Typography>
            </div>
            <div className="">
              <Typography variant="small" className="line-through">
                {formatVND.format(800000)}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-primary-main flex place-items-center font-bold"
              >
                {formatVND.format(400000)}
                <BanknotesIcon className="ml-1 w-4 h-4 text-red-500" />
              </Typography>
            </div>
          </CardFooter>
        </Card>
      </PopoverUI>
    </div>
  );
}
