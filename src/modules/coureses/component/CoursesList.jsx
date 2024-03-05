import { Typography } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import CourseItem from '../../../components/CourseItem';
import { getCourseListPaginationAPI } from '../../../apis/courseAPI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CoursePagination from './CoursePagination/CoursePagination';
import CourseSkeleton from '../../../components/Skeleton/CourseSkeleton';

export default function CoursesList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') >= 1 ? searchParams.get('page') : 1;
  const searchText = searchParams.get('search')
    ? searchParams.get('search')
    : '';
  const limitOnPage = useRef(8);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeCurrentPage = (page) => {
    if (page > totalPage) return;
    if (page <= 0) return;
    setCurrentPage(page);
  };
  const handleBugCurrentPage = (_totalPage) => {
    if (currentPage > _totalPage) {
      setCurrentPage(_totalPage);
      return;
    }
  };

  useEffect(() => {
    const fetchCoursesOnPage = async () => {
      try {
        setIsLoading(true);
        const data = await getCourseListPaginationAPI(
          currentPage,
          limitOnPage.current,
          { tenKhoaHoc: searchText }
        );
        const { items, totalPages: _totalPage } = data;
        setCourses(items);
        setTotalPage(_totalPage);
        handleBugCurrentPage(_totalPage);
      } catch (error) {
        searchParams.set('search', '');
        searchParams.set('page', '1');
        setTotalPage(null);
        setCourses(null);
      } finally {
        navigate(`?page=${currentPage}&search=${searchText}`);
        setIsLoading(false);
      }
    };
    fetchCoursesOnPage();
  }, [currentPage, searchText]);

  return (
    <>
      <div className="container mt-8">
        <Typography variant="h6" className="text-[28px] flex items-cente">
          <FaBookmark className="text-[#ed85ab] text-[24px]" />
          Danh sách khóa học
        </Typography>
        {(!courses || isLoading) && (
          <Typography variant="h1" className="my-4">
            Không tìm thấy khóa học
          </Typography>
        )}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!isLoading &&
            courses &&
            courses.map((course) => (
              <CourseItem key={course.maKhoaHoc} course={course} />
            ))}
          {(!courses && isLoading) &&
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={Math.random() * index} />
            ))}
        </div>
        {totalPage && (
          <CoursePagination
            totalPage={totalPage}
            currentPage={currentPage}
            onChangePage={handleChangeCurrentPage}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
}
