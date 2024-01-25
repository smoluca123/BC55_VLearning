import { Avatar } from '@material-tailwind/react';
import React from 'react';
import LectureBox from './LectureBox';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const lecturesData = [
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg" />
    ),
    name: 'Big DadMoon',
    bio: 'Chuyên gia lĩnh vực lập trình',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg" />
    ),
    name: 'IcarDi MenBor',
    bio: 'Chuyên gia ngôn ngữ Vue Js',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg" />
    ),
    name: 'Bladin Slaham',
    bio: 'Chuyên gia hệ thống máy tính',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg" />
    ),
    name: 'Chris Andersan',
    bio: 'Chuyên gia lĩnh vực Full Skill',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg" />
    ),
    name: 'VueLo Gadi',
    bio: 'Chuyên gia lĩnh vực Phân tích',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg" />
    ),
    name: 'Luca Dev',
    bio: 'Chuyên gia ngôn ngữ ReactJS',
    rate: 4.9,
    rateCount: 100,
  },
  {
    avatar: (
      <Avatar src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg" />
    ),
    name: 'Tây (Cọp)',
    bio: 'Chuyên gia lĩnh vực "CọpPy"',
    rate: 1.4,
    rateCount: 100,
  },
];
export default function LecturesList() {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
    <div className="mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + ' p-[5px]' + '">' + '' + '</span>'
            );
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper customSwiper"
      >
        {lecturesData.map((lecture, index) => (
          <SwiperSlide key={Math.random() * index}>
            <LectureBox lecture={lecture} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
