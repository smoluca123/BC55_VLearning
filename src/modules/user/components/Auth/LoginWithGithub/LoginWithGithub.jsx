import React from 'react';
import { auth } from '../../../../../config/firebaseConfig';
import githubProvider from './config';
import { signInWithPopup } from 'firebase/auth';
import { Button } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signin } from '../../../slices/authSlice';
import { findUserByUsernameAPI, signupAPI } from '../../../../../apis/userAPI';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';

export default function LoginWithGithub({ label, children }) {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleLoginWithGithub = async () => {
    try {
      const data = await signInWithPopup(auth, githubProvider);
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
    }
  };
  return (
    <div>
      <Button
        className="w-full flex justify-center items-center gap-4"
        color="white"
        onClick={handleLoginWithGithub}
      >
        {label || children || 'Login With Github'}{' '}
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
}
