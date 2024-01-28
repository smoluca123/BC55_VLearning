import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

import CardBlogHeader from './CardBlogHeader';
import { Typography, Button } from '@material-tailwind/react';
import CardBlogBody from './CardBody/CardBlogBody';
import BlogBox from '../RightBlog/BlogBox';

export default function ListCard() {
  const DataCartHeader = [
    {
      url: 'https://topdev.vn/blog/wp-content/uploads/2020/10/kyluatdongluc.png',
      title: 'Thời gian và động lực',
    },
    {
      url: 'https://st.quantrimang.com/photos/image/2023/03/02/Tailwind-CSS-theme-7.jpg',
      title: 'Tailwind css và cách cài đặt cơ bản ',
    },
    {
      url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1637/61b175b396838.jpg',
      title: 'Cấu trúc cơ bản trong HTML',
    },
    {
      url: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1463/61a1bbd228640.jpg',
      title: 'Material UI custom theme với TypeScript',
    },
    {
      url: 'https://topdev.vn/blog/wp-content/uploads/2019/09/reactjs-nhung-dieu-ban-can-phai-biet-3.png',
      title: 'Cách tạo một component nhanh chóng chỉ bằng 3 ký tự',
    },
    {
      url: 'https://codelearnstorage.s3.amazonaws.com/Upload/Blog/bat-dong-bo-trong-javascript-phan-1-63729279698.371.jpg',
      title: 'Xử lý bất đồng bộ trong Javascript (phần 2)',
    },
    {
      url: 'https://mevn-public.s3-ap-southeast-1.amazonaws.com/marketenterprise.vn/wp-images/2022/06/13191907/Ta%CC%A3i-sao-ne%CC%82n-su%CC%9B%CC%89-du%CC%A3ng-typescript_pha%CC%82%CC%80n-1.jpg',
      title: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
    },
    {
      url: 'https://mevn-public.s3-ap-southeast-1.amazonaws.com/marketenterprise.vn/wp-images/2022/06/13191907/Ta%CC%A3i-sao-ne%CC%82n-su%CC%9B%CC%89-du%CC%A3ng-typescript_pha%CC%82%CC%80n-1.jpg',
      title: 'TyperScrip là gì, Vì sao nên dùng TyperScript',
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 my-4 sm:grid-cols-1 grid-cols-1">
        <div className=" col-span-2 mx-10 ">
          <Typography variant="h5" className="uppercase flex ml-[40px]">
            <FaBullhorn className="text-[#ed85ab]" />
            PHÙ HỢP VỚI BẠN
          </Typography>
          <div className="grid  md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:grid-cols-1 gap-4 xl:grid-cols-2">
            {DataCartHeader.map(({ url, title }) => {
              return <CardBlogHeader url={url} title={title} />;
            })}
          </div>
        </div>
        <div className="w-full md:w-full sm:w-full">
          <BlogBox />
        </div>
      </div>
    </div>
  );
}
