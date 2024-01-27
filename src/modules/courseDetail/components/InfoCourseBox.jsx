import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Avatar, Typography } from '@material-tailwind/react';
import StarScore from '../../../hooks/StarScore';
export default function InfoCourseBox({ course }) {
  const score = Math.round(Math.random() * 5);
  const { starScore } = StarScore();

  const {
    tenKhoaHoc,
    moTa,
    danhMucKhoaHoc: { tenDanhMucKhoaHoc },
    nguoiTao: { hoTen, tenLoaiNguoiDung },
  } = course;
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8">
        <div className="flex">
          <Avatar
            src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
            alt=""
          />
          <div className="ml-2">
            <Typography variant="small" className="text-gray-600">
              {tenLoaiNguoiDung}
            </Typography>
            <Typography variant="paragraph" className="text-lg">
              {hoTen}
            </Typography>
          </div>
        </div>
        <div className="flex">
          <AcademicCapIcon className="w-12 text-primary-main " />
          <div className="ml-2">
            <Typography variant="small" className="text-gray-600">
              Lĩnh vực
            </Typography>
            <Typography variant="paragraph" className="text-lg">
              {tenDanhMucKhoaHoc}
            </Typography>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center">
            <div className="flex">{starScore(score)}</div>
            <Typography
              variant="small"
              className="text-gray-600 ml-2 font-bold"
            >
              {score}
            </Typography>
          </div>
          <Typography variant="small" className="ml-1 mt-1">
            {Math.round(Math.random() * 100)} đánh giá
          </Typography>
        </div>

        {/* Desc */}
      </div>
      <Typography
        variant="paragraph"
        className="max-w-full text-md font-medium my-4 h-auto pb-2 max-h-[125px] w-full break-words truncate text-ellipsis whitespace-pre-line overflow-hidden !line-clamp-5 border-b border-b-gray-400"
      >
        {moTa}
      </Typography>
    </div>
  );
}
