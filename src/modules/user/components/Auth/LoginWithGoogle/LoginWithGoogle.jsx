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
import CryptoJS from 'crypto-js';
export default function LoginWithGoogle({ label, children }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      const data = await signInWithPopup(auth, googleProvider);
      const find = await findUserByUsernameAPI(data.user.email);
      const check = find.find((user) => user.email === data.user.email);
      const passwordHash = CryptoJS.MD5(data.user.email).toString();
      if (check) {
        const credentials = {
          taiKhoan: data.user.email,
          matKhau: passwordHash,
        };
        await dispatch(signin(credentials)).unwrap();
      } else {
        const credentials = {
          taiKhoan: data.user.email,
          matKhau: passwordHash,
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
      if (error.code) {
        switch (error.code) {
          case 'auth/account-exists-with-different-credential':
            toast.error('Email này đã liên kết với phương thức đăng nhập khác');
            break;
          case 'auth/popup-closed-by-user':
            toast.error('Đã hủy đăng nhập');
            break;
          default:
            toast.error('Đăng nhập thất bại');
        }
        return;
      }
      toast.error(error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <Button
        className="w-full flex justify-center items-center gap-4"
        color="white"
        onClick={loginWithGoogle}
        disabled={!!isLoading}
      >
        {isLoading ? <Spinner /> : label || children || 'Login With Google'}
        <FaGoogle className="text-red-500 w-6 h-6" />
      </Button>
    </div>
  );
}
