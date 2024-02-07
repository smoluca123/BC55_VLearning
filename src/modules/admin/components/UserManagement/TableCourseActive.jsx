import {
  Card,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {
  addUserToCourseAPI,
  getCourseActiveFromUserAPI,
  removeCourseFromUserAPI,
} from '../../../../apis/userManagement';
import { TrashIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const TABLE_HEAD = ['STT', 'Tên khóa học', 'Chờ xác nhận'];

export default function TableCourseActive({ selectedUser, triggerRender }) {
  const [courseActive, setCourseActive] = useState(null);

  const getCourseActiveFromUser = async () => {
    try {
      const data = await getCourseActiveFromUserAPI(selectedUser?.taiKhoan);
      setCourseActive(data);
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
      await getCourseActiveFromUser();
      toast.success(data);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseActiveFromUser();
  }, [triggerRender]);

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
          {courseActive &&
            courseActive.map(({ tenKhoaHoc, maKhoaHoc }, index) => {
              const isLast = index === courseActive.length - 1;
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
      {courseActive && courseActive.length <= 0 && (
        <Typography className="text-center mt-4" variant="h6">
          Bạn chưa ghi danh khóa học nào
        </Typography>
      )}
    </Card>
  );
}
