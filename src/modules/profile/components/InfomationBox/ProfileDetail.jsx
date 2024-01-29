import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { getUserInfoAPI, getUserTypeAPI } from '../../../../apis/userAPI';
import DialogUpdateProfile from './DialogProfile/DialogUpdateProfile';

export default function ProfileDetail() {
  const [typeUser, setTypeUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleOpen = () => setOpen((cur) => !cur);

  const getUserData = async () => {
    try {
      const data = await getUserInfoAPI();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

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
    <div className="">
      <Button className="uppercase w-full mb-2" onClick={handleOpen}>
        Cập nhật
      </Button>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Email:
            </Typography>
            <Typography>{userData?.email}</Typography>
          </div>
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Họ tên:
            </Typography>
            <Typography>{userData?.hoTen}</Typography>
          </div>
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Số điện thoại:
            </Typography>
            <Typography>{userData?.soDT}</Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Tài khoản:
            </Typography>
            <Typography>{userData?.taiKhoan}</Typography>
          </div>
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Nhóm:
            </Typography>
            <Typography>{userData?.maNhom}</Typography>
          </div>
          <div className="flex text-black ">
            <Typography variant="h6" className="mr-2">
              Đối tượng:
            </Typography>
            <Typography>
              {typeUser &&
                userData &&
                typeUser.find(
                  (type) => type.maLoaiNguoiDung == userData.maLoaiNguoiDung
                ).tenLoaiNguoiDung}
            </Typography>
          </div>
        </div>
      </div>
      {userData && (
        <DialogUpdateProfile
          open={open}
          handleOpen={handleOpen}
          userData={userData}
          getUserData={getUserData}
        />
      )}
    </div>
  );
}
