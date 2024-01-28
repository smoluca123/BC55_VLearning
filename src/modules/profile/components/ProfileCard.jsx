import { Avatar, Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function ProfileCard() {
  const { currentUser } = useSelector((state) => state.auth);

  const { hoTen } = currentUser;
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar
        className="!size-40"
        src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg"
      />
      <Typography variant="h6" className="truncate">
        {hoTen}
      </Typography>
      <Typography variant="paragraph">Lập trình viên Front-end</Typography>
      <Button className="bg-primary-main text-white rounded-full hover:bg-white hover:text-primary-main">
        Hồ sơ cá nhân
      </Button>
    </div>
  );
}
