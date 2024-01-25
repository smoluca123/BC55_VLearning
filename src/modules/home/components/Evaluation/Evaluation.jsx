import React from 'react';
import Shapes from './Shapes';
import { Typography } from '@material-tailwind/react';

export default function Evaluation() {
  return (
    <div className="min-h-[400px] relative flex flex-col md:flex-row justify-between">
      <Shapes />
      <div className="md:w-1/2 relative flex justify-center items-center">
        <div className="bg-[#ed85ab] h-[220px] w-[230px] absolute rounded-[10px_100px_110px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <img
          src="/assets/img/avatarReview.png"
          alt=""
          className="w-[200px] h-[200px] relative"
        />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center">
        <blockquote className="">
          <Typography
            variant="paragraph"
            className="relative text-lg text-center md:text-left before:absolute before:top-[-10px] before:left-[-30px] before:text-[50px] before:font-bold before:text-[#ed85ab] before:content-[open-quote] after:content-[close-quote]"
          >
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-4 text-center md:text-left"
          >
            <p className="text-[#ed85ab] font-bold">Luca Dev</p>
            <p className="text-gray-600">Học viên xuất sắc</p>
          </Typography>
        </blockquote>
      </div>
    </div>
  );
}
