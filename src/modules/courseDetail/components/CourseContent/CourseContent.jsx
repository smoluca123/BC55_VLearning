import { Typography } from '@material-tailwind/react';
import React from 'react';
import ContentBox from './ContentBox';

export default function CourseContent() {
  return (
    <div className="mt-8">
      <Typography variant="h3" className="">
        Nội dung khóa học
      </Typography>

      <ContentBox
        title="MỤC 1: GIỚI THIỆU"
        contentList={[
          'Các khái niệm về React Component',
          'Thiết lập môi trường cho Windows',
          'Tạo ứng dụng React - React-Scripts',
          'Ghi chú nhanh về dấu ngoặc kép cho string interpolation',
        ]}
      />
      <ContentBox
        title="MỤC 2: KIẾN THỨC CĂN BẢN"
        contentList={[
          'Trang chủ và thành phần thư mục',
          'Hướng dẫn khóa học + Liên kết Github',
          'Trang chủ thương mại điện tử + thiết lập SASS',
          'Tệp CSS và SCSS',
          'React 17: Cập nhật các gói + Phiên bản React mới nhất',
        ]}
      />
      <ContentBox
        title="MỤC 3: KIẾN THỨC CHUYÊN SÂU"
        contentList={[
          'connect() and mapStateToProps',
          'Trạng thái thư mục vào Redux',
          'Thành phần Tổng quan về Bộ sưu tập',
        ]}
      />
    </div>
  );
}
