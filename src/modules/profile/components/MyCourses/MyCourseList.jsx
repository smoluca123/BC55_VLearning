import React, { useEffect, useState } from 'react';
import { getUserInfoAPI } from '../../../../apis/userAPI';
import MyCourseItem from './MyCourseItem';

export default function MyCourseList({ watch }) {
  const watchSearchText = watch('searchText');
  const [myCourses, setMyCourses] = useState([]);
  const [fillCourses, setFillCourses] = useState([]);

  const getMyCourses = async () => {
    try {
      const data = await getUserInfoAPI();
      setMyCourses(data.chiTietKhoaHocGhiDanh);
      setFillCourses(data.chiTietKhoaHocGhiDanh);
    } catch (error) {
      console.log(error);
    }
  };

  const getMyCoursesBySearchText = (searchText) => {
    if (!myCourses) return;
    const filtedCourses = myCourses.filter((course) => {
      return course.tenKhoaHoc.toLowerCase().includes(searchText.toLowerCase());
    });
    setFillCourses(filtedCourses);
  };
  useEffect(() => {
    if (!watchSearchText) {
      getMyCourses();
      return;
    }
    getMyCoursesBySearchText(watchSearchText);
  }, [watchSearchText]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {fillCourses.map((course) => {
        return <MyCourseItem course={course} />;
      })}
    </div>
  );
}
