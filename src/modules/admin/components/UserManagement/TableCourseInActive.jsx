import {
  Card,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {
  addUserToCourseAPI,
  getCourseInactiveFromUserAPI,
  removeCourseFromUserAPI,
} from '../../../../apis/userManagement';
import { CheckBadgeIcon, TrashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const TABLE_HEAD = ['STT', 'Tên khóa học', 'Chờ xác nhận'];

export default function TableCourseInActive({ selectedUser, onTriggerRender }) {
  const [courseInactive, setCourseInactive] = useState(null);

  const getCourseInactiveFromUser = async () => {
    try {
      const data = await getCourseInactiveFromUserAPI(selectedUser?.taiKhoan);
      setCourseInactive(data);
    } catch (error) {
      console.log(error);
    }
  };
  const activeCourse = async (maKhoaHoc) => {
    try {
      const data = await addUserToCourseAPI(maKhoaHoc, selectedUser?.taiKhoan);
      await getCourseInactiveFromUser();
      onTriggerRender(Math.random());
      toast.success(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeCourse = async (maKhoaHoc) => {
    try {
      const data = await removeCourseFromUserAPI(
        maKhoaHoc,
        selectedUser?.taiKhoan
      );
      await getCourseInactiveFromUser();
      onTriggerRender(Math.random());
      toast.success(data);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseInactiveFromUser();
  }, []);

  return (
    <Card className=" h-full max-h-[40vh] w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courseInactive &&
            courseInactive.map(({ tenKhoaHoc, maKhoaHoc }, index) => {
              const isLast = index === courseInactive.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={maKhoaHoc}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {tenKhoaHoc}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Tooltip content="Cập nhật người dùng">
                      <IconButton
                        variant="text"
                        onClick={() => {
                          activeCourse(maKhoaHoc);
                        }}
                      >
                        <CheckBadgeIcon className="h-6 w-6 text-green-400" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Xóa người dùng">
                      <IconButton
                        variant="text"
                        onClick={() => {
                          removeCourse(maKhoaHoc);
                        }}
                      >
                        <TrashIcon className="h-6 w-6 text-red-500" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {courseInactive && courseInactive.length <= 0 && (
        <Typography className="text-center mt-4" variant="h6">
          Bạn chưa ghi danh khóa học nào
        </Typography>
      )}
    </Card>
  );
}
