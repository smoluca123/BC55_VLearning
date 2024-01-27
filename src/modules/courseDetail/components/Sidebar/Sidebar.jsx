import { BoltIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import SidebarCourseDetail from './SidebarCourseDetail';
export default function Sidebar({ course }) {
  const { tenKhoaHoc, hinhAnh } = course;
  const formatVND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <Card className="mt-6 w-full">
      <CardHeader
        color="white"
        className="relative flex flex-col justify-center items-center shadow-none rounded-br-none rounded-bl-none"
      >
        <img
          src={hinhAnh}
          alt="card-image"
          className="object-cover w-full align-middle max-h-[400px]"
        />
        <div className="flex items-center ml-auto mt-4">
          <BoltIcon className="w-6 h-6 text-colorSecondary-main mr-2" />
          <Typography variant="paragraph" className="text-2xl" color="black">
            {formatVND.format(500000)}
          </Typography>
        </div>
        <Button
          className="border-primary-main text-primary-main hover:text-white hover:bg-primary-main w-full"
          variant="outlined"
        >
          Đăng ký
        </Button>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 truncate">
          Khóa học : {tenKhoaHoc}
        </Typography>

        <SidebarCourseDetail />
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
