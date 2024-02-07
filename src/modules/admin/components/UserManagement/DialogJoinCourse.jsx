import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Option,
  Alert,
  Spinner,
} from '@material-tailwind/react';
import GroupSelect from './components/GroupSelect';
import { useState, useEffect } from 'react';
import { getCourseListAPI } from '../../../../apis/courseAPI';
import { useForm } from 'react-hook-form';

import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import TableCourseInActive from './TableCourseInActive';
import TabCourses from './TabCourses';
import { addUserToCourseAPI } from '../../../../apis/userManagement';
import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/outline';
export default function DialogJoinCourse({
  open,
  onOpen: handleOpen,
  selectedUser,
}) {
  const [coursesList, setCoursesList] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [triggerRender, setTriggerRender] = useState(Math.random());

  const handleAddUserToCourse = async () => {
    try {
      if (!selectedUser) return;
      const data = await addUserToCourseAPI(
        selectedCourseId,
        selectedUser?.taiKhoan
      );
      setTriggerRender(Math.random());
      toast.success(data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const getCoursesList = async () => {
      try {
        const data = await getCourseListAPI();
        setCoursesList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoursesList();
  }, []);

  useEffect(() => {
    if (open) return;
    setSelectedCourseId(null);
  }, [open]);

  return (
    <>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full ">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Ghi danh người dùng
            </Typography>
            <div className="py-4 border-b border-t border-gray-400">
              <GroupSelect
                label="Chọn khóa học"
                onChange={(value) => {
                  setSelectedCourseId(value);
                  console.log(value);
                }}
              >
                {coursesList ? (
                  coursesList.map(({ maKhoaHoc, tenKhoaHoc }) => (
                    <Option key={maKhoaHoc} value={maKhoaHoc}>
                      {tenKhoaHoc}
                    </Option>
                  ))
                ) : (
                  <Option value="">Chọn khóa học</Option>
                )}
              </GroupSelect>

              <Button
                className="flex items-center gap-2"
                onClick={handleAddUserToCourse}
              >
                Ghi danh
              </Button>
            </div>
            <Typography className="-mb-2" variant="h6">
              Khóa học
            </Typography>
            <TabCourses
              triggerRender={triggerRender}
              selectedUser={selectedUser}
            />
          </CardBody>
          <CardFooter className="pt-0"></CardFooter>
        </Card>
        <Toaster position="top-right" />
      </Dialog>
    </>
  );
}
