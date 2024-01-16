import React from 'react';
import Box from './Box';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CourseBox() {
  return (
    <div className="container">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Box
          className="row-start-1 row-span-2 bg-primary-main"
          title="KHÓA HỌC"
          listCheck={[
            {
              icon: CheckCircleIcon,
              content: 'Hơn 1000 bài tập và dự án thực tế',
            },
            {
              icon: CheckCircleIcon,
              content: 'Công nghệ cập nhật mới nhất',
            },
            {
              icon: CheckCircleIcon,
              content: 'Hình ảnh, ví dụ, bài giảng sinh động trực quan',
            },
            {
              icon: CheckCircleIcon,
              content: 'Tư duy phân tích, giải quyết vấn đề trong dự án',
            },
            {
              icon: CheckCircleIcon,
              content:
                'Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án',
            },
            {
              icon: CheckCircleIcon,
              content: 'Cơ hội thực tập tại các công ty lớn như FPT, Microsoft',
            },
          ]}
        >
          Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man,
          phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi
          một dự án lớn ngoài thực tế để học viên học xong làm được ngay
        </Box>
        <Box
          className="bg-colorSecondary-main"
          title="LỘ TRÌNH PHÙ HỢP"
          listCheck={[
            {
              icon: CheckCircleIcon,
              content: ' Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao',
            },
            {
              icon: CheckCircleIcon,
              content: 'Học, luyện tập code, kỹ thuật phân tích, soft skill',
            },
            {
              icon: CheckCircleIcon,
              content:
                'Huấn luyện để phát triển năng lực và niềm đam mê lập trình',
            },
          ]}
        ></Box>
        <Box
          className="bg-[#5c8295]"
          title="HỆ THỐNG HỌC TẬP"
          listCheck={[
            {
              icon: CheckCircleIcon,
              content:
                'Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên',
            },
            {
              icon: CheckCircleIcon,
              content:
                'Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập',
            },
          ]}
        ></Box>
        <Box
          className="bg-colorSecondary-main"
          title="GIẢNG VIÊN"
          listCheck={[
            {
              icon: CheckCircleIcon,
              content: 'Tương tác cùng mentor và giảng viên qua phần thảo luận',
            },
            {
              icon: CheckCircleIcon,
              content: 'Review code và đưa ra các nhận xét góp ý',
            },
            {
              icon: CheckCircleIcon,
              content: 'Chấm điểm tương tác thảo luận giữa các học viên',
            },
          ]}
        ></Box>

        <Box
          className="bg-primary-main"
          title="CHỨNG NHẬN"
          listCheck={[
            {
              icon: CheckCircleIcon,
              content: 'Chấm bài và có thể vấn đáp trực tuyến để review',
            },
            {
              icon: CheckCircleIcon,
              content:
                'Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo',
            },
            {
              icon: CheckCircleIcon,
              content: 'Kết nối CV của bạn đến với các đối tác của V learning',
            },
          ]}
        ></Box>
      </div>
    </div>
  );
}
