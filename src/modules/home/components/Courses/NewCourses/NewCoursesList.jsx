import CourseItem from '../components/CourseItem';

export default function NewCoursesList({ newCourses }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {newCourses.map((course) => {
        return <CourseItem key={course.maKhoaHoc} course={course} />;
      })}
    </div>
  );
}
