import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import React from 'react';

const checkList = [
  {
    icon: CheckCircleIcon,
    content:
      'Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh',
  },
  {
    icon: CheckCircleIcon,
    content:
      'Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015',
  },
  {
    icon: CheckCircleIcon,
    content:
      'Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ',
  },
  {
    icon: CheckCircleIcon,
    content: 'Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp',
  },
  {
    icon: CheckCircleIcon,
    content:
      'Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng',
  },
  {
    icon: CheckCircleIcon,
    content:
      'Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản',
  },
  {
    icon: CheckCircleIcon,
    content: 'Tìm hiểu tất cả về React Hooks và React Components',
  },
  {
    icon: CheckCircleIcon,
    content:
      'Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux',
  },
];
export default function LearnList() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-2">
        {checkList.map((item, index) => {
          const { icon: Icon, content } = item;
          return (
            <div className="flex items-center mt-1" key={index}>
              <Icon className="min-w-6 w-6 h-6 mr-1 text-colorSecondary-main" />
              <Typography variant="paragraph">{item.content}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
