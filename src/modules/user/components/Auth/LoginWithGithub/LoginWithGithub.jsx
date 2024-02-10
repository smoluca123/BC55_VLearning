import React, { useEffect, useState } from 'react';
import { auth } from '../../../../../config/firebaseConfig';
import githubProvider from './config';
import {
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { Button, Spinner } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signin } from '../../../slices/authSlice';
import { findUserByUsernameAPI, signupAPI } from '../../../../../apis/userAPI';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';

export default function LoginWithGithub({ label, children }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loginWithRedirect = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginWithGithub = async () => {
    try {
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
    handleLoginWithGithub();
  }, []);
  return (
    <div>
      <Button
        className="w-full flex justify-center items-center gap-4"
        color="white"
        onClick={loginWithRedirect}
        disabled={!!isLoading}
      >
        {isLoading ? <Spinner /> : label || children || 'Login With Github'}
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
}
