import { Card, Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import GroupInput from './UI/GroupInput';
import AuthSection from './UI/AuthSection';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../slices/authSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';
import toast from 'react-hot-toast';
import LoginWithGithub from './LoginWithGithub/LoginWithGithub';

const validationSchema = object({
  taiKhoan: string().required('Tài khoản không được trống'),
  matKhau: string().required('Mật khẩu không được trống'),
});
export default function Login({ onToggle }) {
  const { currentUser, isLoading, error } = useSelector((state) => state.auth);
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const handleLogin = async (value) => {
    try {
      await dispatch(signin(value)).unwrap();
      setIsSuccess(true);
      toast.success('Đăng nhập thành công');
      const url = searchParams.get('from') || '/';
      navigate(url);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <AuthSection>
      <Card shadow={false} className="w-full h-full px-20">
        <Typography variant="h4" color="blue-gray">
          Đăng nhập
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          hoặc sử dụng tài khoản đã đăng ký của bạn.
        </Typography>
        <form className="mt-8 mb-2 " onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-1 flex flex-col gap-6">
            <GroupInput
              label="Username"
              placeholder="cybersoft"
              register={register('taiKhoan')}
              errors={errors.taiKhoan}
              watch={watch('taiKhoan')}
            />
            <GroupInput
              label="Password"
              placeholder="******"
              type="password"
              register={register('matKhau')}
              errors={errors.matKhau}
              watch={watch('matKhau')}
            />
          </div>

          <Button className="mt-6" type="submit" fullWidth disabled={isLoading}>
            login
          </Button>
          <LoginWithGoogle />
          <div className="mt-2">
            <LoginWithGithub />
          </div>

          <Typography
            color="gray"
            className="md:hidden mt-4 text-center font-normal"
          >
            Bạn chưa có tài khoản?{' '}
            <button
              type="button"
              className="font-medium text-gray-900"
              onClick={onToggle}
            >
              Đăng Ký
            </button>
          </Typography>
        </form>
      </Card>
    </AuthSection>
  );
}
