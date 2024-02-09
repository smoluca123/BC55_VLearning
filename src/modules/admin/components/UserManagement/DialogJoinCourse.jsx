import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Option,
} from '@material-tailwind/react';
import GroupSelect from './components/GroupSelect';
import { useState, useEffect } from 'react';
import { getCourseListAPI } from '../../../../apis/courseAPI';
import toast, { Toaster } from 'react-hot-toast';
import TabCourses from './TabCourses';
import { addUserToCourseAPI } from '../../../../apis/userManagement';
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
              onTriggerRender={setTriggerRender}
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
