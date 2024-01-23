import { Typography, Button } from '@material-tailwind/react';
import React from 'react';

export default function AlertEvent() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-[80px] px-[80px] place-items">
        <div
          className="w-[450px] animate-bounce py-2"
          style={{ animationDelay: '0.8s', animationDuration: '6s' }}
        >
          <div className="w-[450px]">
            <img
              src="https://demo2.cybersoft.edu.vn/static/media/it.ef68b551.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="font-medium">
          <Typography variant="h3" className="text-[#9f1f56]">
            SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP
          </Typography>
          <Typography variant="h6" className="my-2">
            Nơi gặp gỡ của những tư tưởng lớn
          </Typography>
          <Typography variant="h7" className="text-[#8c8c8c]">
            Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam
            tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao
            gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things
            (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented
            reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)
          </Typography>
          <div className="uppercase font-bold ml-[-15px] py-6">
            <Button className="mx-4 bg-primary-main">Tham gia</Button>
            <Button className="bg-colorSecondary-main">Tìm hiểu thêm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
