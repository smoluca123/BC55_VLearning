import React from 'react';
import SpeacherItem from './SpeacherItem';
import { Typography } from '@material-tailwind/react';

export default function Speecher() {
  const speecherData = [
    {
      nameSpeecher: 'Nguyễn Nhật',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Nguyễn Nhật Nam',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Nguyễn Nam',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Jhonny Đặng',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Ngô Henry',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Vương Phạm Vn',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'Rober Imacu',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg',
      position: 'Ceo TechViet Production',
    },
    {
      nameSpeecher: 'KHOA PUG',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg',
      position: 'Ceo TechViet Production',
    },
  ];
  return (
    <div
      className="z-1 pt-12 bg-cover bg-center w-full"
      style={{
        backgroundImage:
          'url("https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: '0.9',
      }}
    >
      <Typography
        variant="h6"
        className="text-colorSecondary-main uppercase  pb-8 text-center text-[1.8rem] h-full"
      >
        Các nhà đồng sáng tạo
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  text-black">
        {speecherData.map(({ nameSpeecher, url, position }) => {
          return (
            <SpeacherItem
              nameSpeecher={nameSpeecher}
              url={url}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
}
