import React from 'react';
import { Typography } from '@material-tailwind/react';
export default function BlogBoxItem({ title, links, key }) {
  const contentData = [
    {
      title: 'Routing trong reactjs',
      content: 'Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg',
      name: 'Nguyên Văn',
    },
    {
      title: 'Xử Lý Bất Đồng Bộ Trong Javascript',
      content:
        'Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và đây... ',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg',
      name: 'Nguyên Minh',
    },
    {
      title: 'Routing trong reactjs',
      content: 'Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...',
      url: 'https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg',
      name: 'Nguyên Văn',
    },
  ];
  return (
    <div>
      <div className="mx-auto w-full max-w-7xl px-6 py-8 ">
        <div className="mx-auto  w-full py-6 border-2 border-t-4 border-t-primary-main mb-4">
          <div key={key} className="w-full  ">
            <div className="border-b-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-6 font-bold  opacity-1 text-center text-[20px] "
              >
                {title}
              </Typography>
            </div>
            <ul className="space-y-1 h-full">
              {links.map((link, linkKey) => (
                <Typography
                  key={linkKey}
                  as="li"
                  color="blue-gray"
                  className="text-blue-gray font-medium text-[18px] mx-4 my-4"
                >
                  <a
                    href="#"
                    className="inline-block py-1 pr-2 transition-transform hover:text-primary-main font-medium text-gray-600"
                  >
                    {link}
                  </a>
                </Typography>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto  w-full py-6 border-2 border-t-2 border-t-primary-main my-20">
          <div key={key} className="w-full ">
            <div className="border-b-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-6 font-bold  opacity-1 text-center text-[20px]"
              >
                Các chủ đề được đề xuất
              </Typography>
            </div>
            {contentData.map(({ title, content, url, name }) => {
              return (
                <div className="my-8 mx-4">
                  <Typography
                    as="li"
                    color="blue-gray"
                    className="text-blue-gray text-[18px] mx-4 my-2"
                    variant="h5"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    as="li"
                    color="blue-gray"
                    className="text-gray-600  text-[16px] mx-4 my-2"
                  >
                    {content}
                  </Typography>
                  <div className="flex items-center">
                    <img
                      src={url}
                      alt=""
                      className="w-[45px] h-[45px] rounded-full border-2 mx-2"
                    />
                    <Typography
                      variant="paragraph"
                      className="font-semibold text-gray-600 "
                    >
                      {name}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
