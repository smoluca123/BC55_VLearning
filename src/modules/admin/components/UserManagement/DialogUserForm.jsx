import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Option,
  Alert,
  IconButton,
} from '@material-tailwind/react';
import GroupInput from './components/GroupInput';
import GroupSelect from './components/GroupSelect';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  findUserByUsernameAPI,
  getUserInfoAPI,
  getUserTypeAPI,
  updateUserAPI,
} from '../../../../apis/userAPI';
import { addUserAPI } from '../../../../apis/userManagement';
import toast from 'react-hot-toast';
import { XCircleIcon } from '@heroicons/react/24/outline';

const validationSchema = object({
  taiKhoan: string()
    .required('Tài khoản không được trống')
    .min(3, 'Tài khoản quá ngắn'),
  hoTen: string().required('Họ tên không được trống'),
  email: string()
    .required('Email không được trống')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Email không đúng định dạng'
    ),
  soDT: string().required('Số điện thoại không được trống'),
  matKhau: string()
    .required('Mật khẩu không được trống')
    .min(6, 'Mật khẩu phải có ít nhất 6 kí tự'),
  maLoaiNguoiDung: string().required('Loại người dùng không được trống'),
  maNhom: string().required('Mã nhóm không được trống'),
});
export default function DialogUserForm({
  open,
  handleOpen,
  selectedUser,
  fetchUsers,
}) {
  const [typeUser, setTypeUser] = useState(null);
  const [error, setError] = useState(null);

  const submitBtn = useRef();
  const {
    register,
    setValue,
    reset,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      hoTen: '',
      email: '',
      matKhau: '',
      soDT: '',
      maLoaiNguoiDung: '',
      maNhom: 'GP01',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = async (value) => {
    try {
      if (!selectedUser) {
        await addUserAPI(value);
        handleOpen();
        toast.success('Thêm người dùng thành công');
        await fetchUsers();
        return;
      }
      await updateUserAPI(value);
      handleOpen();
      toast.success('Thêm người dùng thành công');
      await fetchUsers();
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchTypeUser = async () => {
      try {
        const data = await getUserTypeAPI();
        setTypeUser(data);
        setValue('maLoaiNguoiDung', data[1].maLoaiNguoiDung);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypeUser();
  }, []);

  useEffect(() => {
    if (!selectedUser) {
      return;
    }
    const getDataUser = async () => {
      try {
        const { taiKhoan } = selectedUser;
        const data = await findUserByUsernameAPI(taiKhoan);
        setValue('matKhau', data[0].matKhau);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [selectedUser]);

  useEffect(() => {
    if (!selectedUser) {
      reset();
      return;
    }
    for (const key in selectedUser) {
      if (key === 'maNhom' && !selectedUser[key]) {
        continue;
      }
      setValue(key, selectedUser[key]);
      trigger(key);
    }
  }, [selectedUser]);

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none max-h-[90vh] overflow-y-auto"
      >
        <Card className="mx-auto w-full h-full">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Typography variant="h4" color="blue-gray">
                {selectedUser ? 'Cập nhật' : 'Thêm'} người dùng
              </Typography>
              <IconButton color="red" onClick={handleOpen}>
                <XCircleIcon className="w-6 h-6" />
              </IconButton>
            </div>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              {selectedUser ? 'Cập nhật' : 'Thêm'} người dùng{' '}
              {!selectedUser && 'vào hệ thống'}
            </Typography>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <GroupInput
                label="Tài khoản"
                register={register('taiKhoan')}
                errors={errors.taiKhoan}
                watch={watch('taiKhoan')}
              />
              <GroupInput
                label="Họ tên"
                register={register('hoTen')}
                errors={errors.hoTen}
                watch={watch('hoTen')}
              />
              <GroupInput
                label="Email"
                register={register('email')}
                errors={errors.email}
                watch={watch('email')}
              />
              <GroupInput
                label="Mật khẩu"
                type="password"
                register={register('matKhau')}
                errors={errors.matKhau}
                watch={watch('matKhau')}
              />
              <GroupInput
                label="Số điện thoại"
                register={register('soDT')}
                errors={errors.soDT}
                watch={watch('soDT')}
              />
              {typeUser && (
                <GroupSelect
                  label="Loại người dùng"
                  onChange={(value) => {
                    setValue('maLoaiNguoiDung', value);
                  }}
                  value={
                    watch('maLoaiNguoiDung') || typeUser[1].maLoaiNguoiDung
                  }
                >
                  {typeUser.map((item) => (
                    <Option
                      key={item.maLoaiNguoiDung}
                      value={item.maLoaiNguoiDung}
                    >
                      {item.tenLoaiNguoiDung}
                    </Option>
                  ))}
                </GroupSelect>
              )}
              <GroupSelect
                label="Mã nhóm"
                onChange={(value) => {
                  setValue('maNhom', value);
                }}
                value="GP01"
              >
                {Array.from({ length: 10 }).map((item, index) => {
                  const _index = index + 1;
                  return (
                    <Option
                      key={_index}
                      value={_index < 10 ? 'GP0' + _index : 'GP' + _index}
                    >
                      {_index < 10 ? 'GP0' + _index : 'GP' + _index}
                    </Option>
                  );
                })}
              </GroupSelect>
              <button className="hidden" ref={submitBtn} type="submit"></button>
            </form>
            {error && (
              <div className="w-full ">
                <Alert color="red">{error}</Alert>
              </div>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={() => {
                submitBtn.current.click();
              }}
              fullWidth
            >
              {selectedUser ? 'Cập nhật' : 'Thêm người dùng'}
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
