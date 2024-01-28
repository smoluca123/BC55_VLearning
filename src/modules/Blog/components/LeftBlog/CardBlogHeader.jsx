import React from 'react';
import { Typography } from '@material-tailwind/react';
import CardBlogBody from './CardBody/CardBlogBody';
let contentData = [
  {
    name: 'Jhony Đặng',
    content:
      'Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...',
  },
];
export default function CardBlogHeader({ url, title }) {
  return (
    <div>
      <div className=" m-2 py-2 ">
        <div className=" border-4 h-full w-full ">
          <img src={url} alt="" className="w-full" />
        </div>{' '}
        <Typography variant="h5" className="my-2">
          {title}
        </Typography>
      </div>
      {contentData.map((item) => {
        const { name, content } = item;
        return <CardBlogBody author={name} content={content} />;
      })}
    </div>
  );
}
