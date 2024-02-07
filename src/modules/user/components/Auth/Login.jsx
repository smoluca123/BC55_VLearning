import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import GroupInput from './UI/GroupInput';
import AuthSection from './UI/AuthSection';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../slices/authSlice';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
      Swal.fire({
        icon: 'success',
        title: 'Đăng nhập thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      const url = searchParams.get('from') || '/';
      navigate(url);
    } catch (error) {
      console.log(error);
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
              label="Your email"
              placeholder="abc@cybersoft.edu.vn"
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
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className="mt-6" type="submit" fullWidth disabled={isLoading}>
            login
          </Button>

          {/* Dùng opacity giữ layout không bị giật giật khi alert xuất hiện và ẩn đi - Luca Dev */}
          <div
            className={classNames({
              'opacity-0': !error,
            })}
          >
            <Alert color="red" className="mt-4">
              {error ?? 'Empty'}
            </Alert>
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
