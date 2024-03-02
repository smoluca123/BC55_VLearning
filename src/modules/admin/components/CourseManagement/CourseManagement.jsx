import CourseList from './CourseList';
import CoursePagination from './CoursePagination';
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
} from '@material-tailwind/react';
import { useEffect, useState, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  getCourseCategoryAPI,
  getCourseListPaginationAPI,
} from '../../../../apis/courseAPI';
import DialogAddCourse from './DialogAddCourse';
import { useForm } from 'react-hook-form';

const TABLE_HEAD = [
  'STT',
  'Mã khoá học ',
  'Tên khoá học',
  'Hình ảnh ',
  'Lượt xem ',
  'Người tạo ',
  'Hành động ',
];

export default function CourseManagement() {
  const [timeoutId, setTimeoutId] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [courseList, setCourseList] = useState([]);
  const [open, setOpen] = useState(false);
  const limit = useRef(10);
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //modal
  const [courseCategories, setCourseCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('0');

  const handleChangeCurrentPage = (page) => {
    if (page > totalPage) return;
    if (page <= 0) return;
    setCurrentPage(page);
  };

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  const { register, watch } = useForm({
    defaultValues: {
      searchText: '',
    },
  });
  const fetchCourse = async () => {
    try {
      const data = await getCourseListPaginationAPI(
        currentPage,
        limit.current,
        {
          tuKhoa: watch('searchText') || undefined,
        }
      );
      setTotalPage(data.totalPages);
      setCourseList(data.items);
      console.log('data', data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCourse();
    navigate(`?page=${currentPage}`);
  }, [currentPage]);
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      const parsedPage = parseInt(pageParam, 10);
      setCurrentPage(parsedPage);
    }
  }, [searchParams]);
  //  danh muc khoa oc
  useEffect(() => {
    const getCategoriesData = async () => {
      try {
        let categories = await getCourseCategoryAPI();
        setCourseCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoriesData();
  }, []);
  const handleSearch = () => {
    if (searchText.trim() === '') {
      fetchCourse();
    } else {
      const filteredCourses = courseList.filter((course) =>
        course.tenKhoaHoc.toLowerCase().includes(searchText.toLowerCase())
      );
      setCourseList(filteredCourses);
    }
  };
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      handleSearch();
    }, 500);
    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [searchText]);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Course list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all courses
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={handleOpen}
              open={open}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
              Add course
            </Button>
            {
              <DialogAddCourse
                fetchCourse={fetchCourse}
                strokeWidth={2}
                open={open}
                onOpen={handleOpen}
                setSelectedCategory={setSelectedCategory}
                courseCategories={courseCategories}
              />
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max"></Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              value={searchText}
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={(e) => setSearchText(e.target.value)}
              v
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-5 text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between font-normal leading-none opacity-80"
                  >
                    {head}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <CourseList
              courses={courseList}
              fetchCourse={fetchCourse}
              open={open}
              onOpen={handleOpen}
              courseCategories={courseCategories}
              setSelectedCategory={setSelectedCategory}
            />
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4 ">
        <CoursePagination
          totalPage={totalPage}
          currentPage={currentPage}
          onChangePage={handleChangeCurrentPage}
          isLoading={isLoading}
        />
      </CardFooter>
      <Toaster position="top-right" />
    </Card>
  );
}
