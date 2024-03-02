import {
  Card,
  Checkbox,
  Button,
  Typography,
  Option,
  Alert,
} from '@material-tailwind/react';
import GroupInput from './UI/GroupInput';
import GroupSelect from './UI/GroupSelect';
import AuthSection from './UI/AuthSection';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import baseAPI from '../../../../apis/baseAPI';
import { signupAPI } from '../../../../apis/userAPI';
import { useDispatch } from 'react-redux';
import { signin } from '../../slices/authSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';
import toast from 'react-hot-toast';
import LoginWithGithub from './LoginWithGithub/LoginWithGithub';

const validationSchema = object({
  taiKhoan: string()
    .required('Tên không được để trống')
    .min(4, 'Tài khoản quá ngắn'),
  matKhau: string()
    .required('Mật khẩu không được để trống')
    .min(6, 'Mật khẩu phải có ít nhất 6 kí tự'),
  hoTen: string().required('Họ tên không được để trống'),
  soDT: string().required('Số điện thoại không được để trống'),
  email: string()
    .required('Email không được để trống')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Email không đúng định dạng'
    ),
});
export default function Register({ onToggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
      hoTen: '',
      soDT: '',
      maNhom: '',
      email: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const handleRegister = async (value) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      const _value = { ...value, maNhom: value.maNhom || 'GP01' };
      const data = await signupAPI(_value);
      setIsSuccess(true);
      // Sign in
      await dispatch(signin(data)).unwrap();
      const url = searchParams.get('from') || '/';
      navigate(url);
      toast.success('Đăng ký thành công');
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthSection>
      <Card color="transparent" shadow={false} className="w-full px-20 py-8">
        <Typography variant="h4" color="blue-gray">
          Đăng ký
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          để sử dụng dịch vụ.
        </Typography>
        <form className="mt-8 mb-2" onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-1 flex flex-col gap-4">
            <GroupInput
              label="Your email"
              placeholder="Ex: abc@cybersoft.edu.vn"
              register={register('email')}
              errors={errors.email}
              watch={watch('email')}
            />
            <GroupInput
              label="Full name"
              placeholder="Ex: Luca Nguyễn"
              register={register('hoTen')}
              errors={errors.hoTen}
              watch={watch('hoTen')}
            />
            <GroupInput
              label="Username"
              placeholder="Ex: abc1234"
              register={register('taiKhoan')}
              errors={errors.taiKhoan}
              watch={watch('taiKhoan')}
            />
            <GroupInput
              label="Password"
              placeholder="*******"
              type="password"
              register={register('matKhau')}
              errors={errors.matKhau}
              watch={watch('matKhau')}
            />
            <GroupInput
              label="Phone number"
              placeholder="Ex: 0909090909"
              register={register('soDT')}
              errors={errors.soDT}
              watch={watch('soDT')}
            />
            <GroupSelect
              label="Group"
              // value=""
              onChange={(value) => {
                setValue('maNhom', value);
              }}
              trigger={() => {
                trigger('maNhom');
              }}
            >
              {Array.from({ length: 10 }, (v, i) => {
                const _i = i + 1;
                return (
                  <Option
                    key={Math.random() * _i}
                    value={`GP${_i < 10 ? '0' + _i : _i}`}
                  >
                    {`GP${_i < 10 ? '0' + _i : _i}`}
                  </Option>
                );
              })}
            </GroupSelect>
          </div>
          <Button type="submit" className="mt-6" fullWidth disabled={isLoading}>
            sign up
          </Button>
          <LoginWithGoogle>Signup With Google</LoginWithGoogle>
          <div className="mt-2">
            <LoginWithGithub>Signup with Github</LoginWithGithub>
          </div>
          <Typography
            color="gray"
            className=" md:hidden mt-4 text-center font-normal"
          >
            Bạn đã có tài khoản?{' '}
            <button
              type="button"
              className="font-medium text-gray-900"
              onClick={onToggle}
            >
              Đăng nhập
            </button>
          </Typography>
        </form>
      </Card>
    </AuthSection>
  );
}
