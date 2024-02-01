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
import { useSelector } from 'react-redux';
import { joinCourseAPI } from '../../../../apis/courseAPI';
import { useEffect, useState } from 'react';
import { getUserInfoAPI } from '../../../../apis/userAPI';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Sidebar({ course }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isJoin, setIsJoin] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = useSelector((state) => state.auth);
  const getUserInfo = async () => {
    try {
      const data = await getUserInfoAPI();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { tenKhoaHoc, maKhoaHoc, hinhAnh } = course;
  const formatVND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  const handleJoinCourse = async () => {
    try {
      if (!currentUser) {
        const { pathname } = location;
        navigate(`/user?page=login&from=${pathname}`);
        return;
      }
      setIsLoading(true);
      await joinCourseAPI(maKhoaHoc, currentUser.taiKhoan);
      setIsJoin(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!userData) return;
    const joined = userData.chiTietKhoaHocGhiDanh.find(
      (course) => course.maKhoaHoc == maKhoaHoc
    );
    setIsJoin(!!joined);
  }, [maKhoaHoc, userData]);
  useEffect(() => {
    if (!currentUser) return;
    getUserInfo();
  }, []);
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
        {isJoin ? (
          <Button
            className="border-primary-main text-primary-main hover:text-white hover:bg-primary-main w-full"
            variant="outlined"
            disabled={isJoin}
          >
            Đã ghi danh
          </Button>
        ) : (
          <Button
            className="border-primary-main text-primary-main hover:text-white hover:bg-primary-main w-full"
            variant="outlined"
            onClick={handleJoinCourse}
            disabled={isLoading}
          >
            Đăng ký
          </Button>
        )}
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
