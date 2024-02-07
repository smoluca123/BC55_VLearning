import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { getListUserPaginationAPI } from '../../../../apis/userAPI';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserPagination from './UserPagination';
import UserTable from './UserTable';
import DialogUserForm from './DialogUserForm';
import { Toaster } from 'react-hot-toast';
import DialogJoinCourse from './DialogJoinCourse';

const TABLE_HEAD = [
  'Thành viên',
  'Họ tên',
  'Số điện thoại',
  'Loại người dùng',
  '',
];

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const [openJoinCourse, setOpenJoinCourse] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const limit = useRef(10);
  const timer = useRef(null);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleOpenJoinCourse = () => setOpenJoinCourse((cur) => !cur);

  const { register, watch } = useForm({
    defaultValues: {
      searchText: '',
    },
  });

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleChangeCurrentPage = (page) => {
    if (page > totalPage) return;
    if (page <= 0) return;
    setCurrentPage(page);
  };

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const data = await getListUserPaginationAPI(
        watch('searchText') ? 1 : currentPage,
        limit.current,
        {
          tuKhoa: watch('searchText') || undefined,
        }
      );
      setTotalPage(data.totalPages);
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchText, currentPage]);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSearchText(watch('searchText') || null);
    }, 500);
    return () => clearTimeout(timer.current);
  }, [watch('searchText')]);

  useEffect(() => {
    if (open) return;
    setSelectedUser(null);
  }, [open]);
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className=""></div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                {...register('searchText')}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          {(!users || users.length === 0) && (
            <Typography variant="h1" className="text-center">
              Không tìm thấy người dùng
            </Typography>
          )}
          {users && users.length > 0 && (
            <UserTable
              TABLE_HEAD={TABLE_HEAD}
              users={users}
              onSelect={handleSelectUser}
              onOpen={handleOpen}
              onOpenJoinCourse={handleOpenJoinCourse}
              fetchUsers={fetchUsers}
            />
          )}
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <div className="w-full">
            <UserPagination
              totalPage={totalPage}
              currentPage={currentPage}
              onChangePage={handleChangeCurrentPage}
              isLoading={isLoading}
            />
          </div>
        </CardFooter>
      </Card>
      <DialogUserForm
        open={open}
        handleOpen={handleOpen}
        fetchUsers={fetchUsers}
        selectedUser={selectedUser}
      />
      <DialogJoinCourse
        open={openJoinCourse}
        onOpen={handleOpenJoinCourse}
        fetchUsers={fetchUsers}
        selectedUser={selectedUser}
      />

      <Toaster position="top-right" />
    </>
  );
}
