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

const validationSchema = object({
  taiKhoan: string().required('Tên không được để trống'),
  matKhau: string().required('Mật khẩu không được để trống'),
  hoTen: string().required('Họ tên không được để trống'),
  soDT: string().required('Số điện thoại không được để trống'),
  email: string().required('Email không được để trống'),
});
export default function Register({ onToggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
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
      dispatch(signin(data)).unwrap();
    } catch (error) {
      console.log(error);
      setError({ isError: true, message: error });
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
              label="Họ tên"
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
              label="Số điện thoại"
              placeholder="Ex: 0909090909"
              register={register('soDT')}
              errors={errors.soDT}
              watch={watch('soDT')}
            />
            <GroupSelect
              label="Mã Nhóm"
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
          {isSuccess && (
            <Alert color="green">Đăng ký thành công, đang đăng nhập...</Alert>
          )}
          {error?.isError && <Alert color="red">{error.message}</Alert>}
          <Button type="submit" className="mt-6" fullWidth disabled={isLoading}>
            sign up
          </Button>
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
