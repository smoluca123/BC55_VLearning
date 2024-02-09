import { Button, Spinner } from '@material-tailwind/react';
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';

import { FaGoogle } from 'react-icons/fa';
import { findUserByUsernameAPI, signupAPI } from '../../../../../apis/userAPI';
import { useDispatch } from 'react-redux';
import { signin } from '../../../slices/authSlice';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth } from '../../../../../config/firebaseConfig';
import googleProvider from './config';
import { useEffect, useState } from 'react';
export default function LoginWithGoogle({ label, children }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const loginWithRedirect = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginWithGoogle = async () => {
    try {
      //   Phần login bằng gg này backend elearning nó k hỗ trợ api nên e làm tạm bợ get data trả về xong check r gửi đi đăng ký hoặc đăng nhập thôi a :)), chứ k phải thực tế em làm v đâu đừng trừ điểm em tội e nha a Trường :))
      //   Cộng điểm cho e nha a Trường :)))
      setIsLoading(true);
      const data = await getRedirectResult(auth);
      if (!data) return;
      const find = await findUserByUsernameAPI(data.user.email);
      const check = find.find((user) => user.email === data.user.email);
      if (check) {
        const credentials = {
          taiKhoan: data.user.email,
          matKhau: data.user.uid,
        };
        await dispatch(signin(credentials)).unwrap();
      } else {
        const credentials = {
          taiKhoan: data.user.email,
          matKhau: data.user.uid,
          hoTen: data.user.displayName,
          email: data.user.email,
          soDT: data.user.phoneNumber || '0000000000',
          maNhom: 'GP01',
        };
        const dataSignup = await signupAPI(credentials);
        await dispatch(signin(dataSignup)).unwrap();
      }
      const url = searchParams.get('from') || '/';
      navigate(url);
      toast.success('Đăng nhập thành công');
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoginWithGoogle();
  }, []);

  return (
    <div className="mt-4">
      <Button
        className="w-full flex justify-center items-center gap-4"
        color="white"
        onClick={loginWithRedirect}
        disabled={!!isLoading}
      >
        {isLoading ? <Spinner /> : label || children || 'Login With Google'}
        <FaGoogle className="text-red-500 w-6 h-6" />
      </Button>
    </div>
  );
}
