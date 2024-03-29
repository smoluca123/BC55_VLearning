import Courses from './modules/coureses/pages/Courses';
import Events from './modules/events/pages/Events';
import Home from './modules/home/pages/Home';
import MainLayout from './modules/layout/pages/MainLayout';
import { ThemeProvider } from '@material-tailwind/react';
import User from './modules/user/pages/User';
import CourseDetail from './modules/courseDetail/page/CourseDetail';
import Auth from './modules/user/components/Auth/Auth';
import Profile from './modules/profile/pages/Profile';
import PrivateRouter from './Router/PrivateRouter';
import About from './modules/Infomation/pages/About';
import Blog from './modules/Blog/Pages/Blog';
import CategoryCourse from './modules/categoryCourse/pages/CategoryCourse';
import PrivateAdminRouter from './Router/PrivateAdminRouter';
import AdminLayout from './modules/layout/pages/AdminLayout';
import Admin from './modules/admin/pages/Admin';
import UserManagement from './modules/admin/components/UserManagement';
import CourseManagement from './modules/admin/components/CourseManagement';
import { useEffect } from 'react';

const {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} = require('react-router-dom');

function App() {
  const ScrollToTopOnPathChange = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnPathChange />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/user" element={<User />}>
              <Route index element={<Auth />} />
              <Route
                path="profile"
                element={
                  <PrivateRouter>
                    <Profile />
                  </PrivateRouter>
                }
              />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/media" element={<About />} />
            <Route
              path="/course/:biDanh/:idCourse"
              element={<CourseDetail />}
            />
            <Route
              path="/category-course/:categoryId"
              element={<CategoryCourse />}
            />
            <Route
              path="/admin"
              element={
                <PrivateRouter>
                  <PrivateAdminRouter>
                    <AdminLayout />
                  </PrivateAdminRouter>
                </PrivateRouter>
              }
            >
              <Route index element={<Admin />} />
              <Route path="usermanagement" element={<UserManagement />} />
              <Route path="coursemanagement" element={<CourseManagement />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
