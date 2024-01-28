import { Typography, Button } from '@material-tailwind/react'; // Import Typography from material-tailwind
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegComment, FaEye } from 'react-icons/fa';
import TimeBodyCourse from './TimeBodyCourse';

export default function CardBlogBody({ content, author }) {
  const DataTimeBody = [
    {
      icon: <AiOutlineLike className="text-[16px]" />,
      number: 300,
    },
    {
      icon: <FaRegComment className="text-[16px]" />,
      number: 500,
    },
    {
      icon: <FaEye className="text-[16px]" />,
      number: 200,
    },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex">
          {DataTimeBody.map((review) => {
            const { icon, number } = review;
            return (
              <div className="">
                <TimeBodyCourse icon={icon} number={number} />
              </div>
            );
          })}
        </div>
        <div className="mx-2 flex items-center">
          <Typography variant="paragraph" className="text-black  px-2">
            Đăng bởi
          </Typography>
          <Typography variant="paragraph" className="text-[#ed85ab] font-bold">
            {author}
          </Typography>
        </div>
      </div>
      <Typography variant="paragraph" className="ml-2 ">
        {content}
      </Typography>
      <div className="my-4 mx-2">
        {' '}
        <Button>Xem thêm</Button>
      </div>
    </div>
  );
}
