import React, { useEffect, useState } from 'react';
import {
  getCourseCategoryAPI,
  getCourseListByCategoryAPI,
} from '../../../apis/courseAPI';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid';
import CourseItem from '../../../components/CourseItem';

export default function CategoryCourseList({ categoryId }) {
  const [categoryList, setCategoryList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseList, setCourseList] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const data = await getCourseCategoryAPI();
        setCategoryList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoryList();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    const getCourseByCategory = async () => {
      try {
        const data = await getCourseListByCategoryAPI(categoryId);
        setCourseList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseByCategory();
  }, [selectedCategory, categoryId]);

  useEffect(() => {
    if (!categoryList) return;

    const check = categoryList.find((category) => {
      return category.maDanhMuc === categoryId;
    });
    if (check) {
      setSelectedCategory(check);
      return;
    }
    if (!check) {
      navigate('/');
    }
  }, [categoryList, categoryId]);
  return (
    <div>
      <div className="bg-yellow-600 py-12 text-white">
        <div className="container">
          <Typography variant="h1" className="uppercase">
            KHÓA HỌC THEO DANH MỤC
          </Typography>
          <Typography variant="small" className="uppercase">
            HÃY CHỌN KHÓA HỌC MONG MUỐN !!!
          </Typography>
        </div>
      </div>
      <div className="container mt-8 ">
        <Button className="mb-4 flex items-center bg-white border border-black text-black rounded-full">
          <ComputerDesktopIcon className="w-6 h-6 mr-2 text-colorSecondary-main" />
          {selectedCategory?.tenDanhMuc}
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {courseList &&
            courseList.map((course) => (
              <CourseItem key={course.maKhoaHoc} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
}
