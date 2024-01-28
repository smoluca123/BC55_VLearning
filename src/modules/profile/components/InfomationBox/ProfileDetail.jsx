import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserTypeAPI } from '../../../../apis/userAPI';

export default function ProfileDetail() {
  const [typeUser, setTypeUser] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);
  const { hoTen, email, soDT, taiKhoan, maNhom, maLoaiNguoiDung } = currentUser;

  useEffect(() => {
    const getUserType = async () => {
      try {
        const data = await getUserTypeAPI();
        console.log(data);
        setTypeUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserType();
  }, []);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4 w-1/2">
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Email:
          </Typography>
          <Typography>{email}</Typography>
        </div>
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Họ tên:
          </Typography>
          <Typography>{hoTen}</Typography>
        </div>
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Số điện thoại:
          </Typography>
          <Typography>{soDT}</Typography>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Tài khoản:
          </Typography>
          <Typography>{taiKhoan}</Typography>
        </div>
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Nhóm:
          </Typography>
          <Typography>{maNhom}</Typography>
        </div>
        <div className="flex text-black ">
          <Typography variant="h6" className="mr-2">
            Đối tượng:
          </Typography>
          <Typography>
            {typeUser &&
              typeUser.find((type) => type.maLoaiNguoiDung == maLoaiNguoiDung)
                .tenLoaiNguoiDung}
          </Typography>
        </div>
      </div>
    </div>
  );
}
