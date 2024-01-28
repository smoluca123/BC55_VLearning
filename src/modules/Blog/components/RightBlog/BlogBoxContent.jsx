import React from 'react';
import { Typography } from '@material-tailwind/react';
import BlogBoxItem from './BlogBoxItem';

const BlogBoxContent = () => {
  const sitemapData = [
    {
      title: 'Các chủ đề được đề xuất',
      links: [
        'Front-end / Mobile apps',
        'UI / UX / Design',
        'BACK-END',
        'Thư viện',
        'Chia sẻ người trong nghề',
        'Châm ngôn IT',
        'Chủ đề khác',
      ],
    },
  ];
 
  return (
    <div className="relative w-full z-1  bg-white   ">
      <div className="mx-auto w-full max-w-7xl  py-4 overflow-hidden">
       
        {sitemapData.map(({ title, links }) => {
          return <BlogBoxItem title={title} links={links} />;
        })}
      </div>
    </div>
  );
};

export default BlogBoxContent;
