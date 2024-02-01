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
} from '@material-tailwind/react';
import GroupInput from '../components/GroupInput';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { updateUserAPI } from '../../../../../apis/userAPI';
import { signin } from '../../../../user/slices/authSlice';
import Swal from 'sweetalert2';

const validationSchema = object({
  taiKhoan: string().required('Tài khoản không được trống'),
  matKhau: string()
    .required('Mật khẩu không được trống')
    .min(6, 'Mật khẩu phải từ 6 kí tự'),
  hoTen: string().required('Họ tên không được trống'),
  soDT: string().required('Số điện thoại không được trống'),
});
export default function DialogUpdateProfile({
  open,
  handleOpen,
  userData,
  getUserData,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitBtn = useRef();

  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hoTen: userData.hoTen,
      email: userData.email,
      soDT: userData.soDT,
      taiKhoan: userData.taiKhoan,
      matKhau: userData.matKhau,
      maNhom: userData.maNhom,
      maLoaiNguoiDung: userData.maLoaiNguoiDung,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const handleUpdateProfile = async (value) => {
    try {
      setIsLoading(true);
      const data = await updateUserAPI(value);
      //   Lưu data mới
      const { taiKhoan, matKhau } = data;
      dispatch(signin({ taiKhoan, matKhau })).unwrap();
      handleOpen();
      Swal.fire({
        icon: 'success',
        title: 'Cập nhật thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      getUserData();
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full min-w-[500px] max-w-[40rem] bg-[url('https://demo2.cybersoft.edu.vn/static/media/hornor.a74f5377.gif')] bg-cover bg-no-repeat bg-[50%] text-white">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h4"
              className="border-b border-b-gray-200 pb-4 mb-4"
            >
              Chỉnh sửa thông tin cá nhân
            </Typography>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleUpdateProfile)}
            >
              <GroupInput
                label="Họ tên"
                classInput="text-white focus:!border-t-white"
                classLabel="text-white"
                register={register('hoTen')}
                errors={errors.hoTen}
                watch={watch('hoTen')}
              />
              <GroupInput
                label="Email"
                classInput="text-white focus:!border-t-white"
                classLabel="text-white"
                register={register('email')}
                errors={errors.email}
                watch={watch('email')}
              />
              <GroupInput
                label="Mật khẩu"
                classInput="text-white focus:!border-t-white"
                classLabel="text-white"
                type="password"
                register={register('matKhau')}
                errors={errors.matKhau}
                watch={watch('matKhau')}
              />
              <GroupInput
                label="Số điện thoại"
                classInput="text-white focus:!border-t-white"
                classLabel="text-white"
                register={register('soDT')}
                errors={errors.soDT}
                watch={watch('soDT')}
              />
              <button className="hidden" type="submit" ref={submitBtn}></button>
            </form>
          </CardBody>
          <CardFooter className="pt-0 text-right">
            <Button
              onClick={() => {
                submitBtn.current.click();
              }}
              className="mr-2 bg-primary-main"
              disabled={isLoading}
            >
              Cập nhật
            </Button>
            <Button onClick={handleOpen} className="bg-red-400">
              Đóng
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
