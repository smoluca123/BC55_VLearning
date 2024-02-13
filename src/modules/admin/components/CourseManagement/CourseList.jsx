import { useState } from 'react';

import CourseItem from './CourseItem';
import DialogEditCourse from './DialogEditCourse';

export default function CourseList({
  courses,
  fetchCourse,
  open,
  onOpen,
  courseCategories,
  setCourseList,
}) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => {
    if (openModal) {
      setSelectedCourse(null);
    }
    setOpenModal(!openModal);
  };
  const handleSelectedCourse = (course) => {
    setSelectedCourse(course);
  };
  // const handleOpenDialog = () => setOpenDialog(!openDialog);
  return (
    <>
      {courses.map((courses, index) => {
        const isLast = index === courses.length - 1;
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
        return (
          <CourseItem
            classes={classes}
            courses={courses}
            index={index}
            fetchCourse={fetchCourse}
            open={openModal}
            onOpen={handleOpen}
            onSelect={handleSelectedCourse}
            courseCategories={courseCategories}
            setCourseList={setCourseList}
          />
        );
      })}

      {selectedCourse && (
        <DialogEditCourse
          courses={courses}
          fetchCourse={fetchCourse}
          open={openModal}
          selectedCourse={selectedCourse}
          onOpen={handleOpen}
          courseCategories={courseCategories}
          setCourseList={setCourseList}
        />
      )}
    </>
  );
}
