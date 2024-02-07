import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetailAPI, getCourseListAPI } from '../../../apis/courseAPI';
import { Typography } from '@material-tailwind/react';
import Detail from '../components/Detail';
import Sidebar from '../components/Sidebar';
import FeatureCourses from '../../home/components/Courses/FeatureCourses/FeatureCourses';
import { Toaster } from 'react-hot-toast';
export default function CourseDetail() {
  const { idCourse } = useParams();

  const [course, setCourse] = useState(null);

  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const getCoursesList = async () => {
      try {
        const data = await getCourseListAPI();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCoursesList();
  }, []);
  useEffect(() => {
    const getCourseDetail = async () => {
      try {
        const data = await getCourseDetailAPI(idCourse);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseDetail();
  }, [idCourse]);

  return (
    <div className="">
      <div className="bg-yellow-600 px-10 py-14 text-white">
        <div className="container">
          <Typography variant="h3" className="uppercase">
            Thông tin khóa học
          </Typography>
        </div>
        {/* <Typography variant="paragraph" className=""></Typography> */}
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row mt-8 gap-4">
          <div className="w-full md:w-[65%]">
            {course && <Detail course={course} />}
          </div>
          <div className="w-full md:w-[35%] ">
            {course && <Sidebar course={course} />}
          </div>
        </div>
        {courses && <FeatureCourses courses={courses} />}
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
