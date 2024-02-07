import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BookOpenIcon,
} from '@heroicons/react/24/solid';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../user/slices/authSlice';
import Swal from 'sweetalert2';
import classNames from 'classnames';
export default function SidebarNavigate() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLogout = () => {
    dispatch(signOut());
    Swal.fire({
      icon: 'success',
      title: 'Đăng xuất thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="">
      <IconButton
        className="!fixed bg-black text-white hover:bg-white hover:text-black rounded-tl-none rounded-bl-none z-[9999] left-0 !top-40"
        variant="text"
        size="lg"
        onClick={handleToggleDrawer}
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      {isDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-[#000000b8] z-[9999] animate-_fadeInFast"
          onClick={closeDrawer}
        ></div>
      )}
      <Drawer overlay={false} open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Quản trị
            </Typography>
          </div>
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <hr className="my-2 border-blue-gray-50" />
            <NavLink
              to="usermanagement"
              className={({ isActive }) =>
                classNames('rounded-lg', {
                  'text-primary-main bg-black ': isActive,
                })
              }
              onClick={closeDrawer}
            >
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Quản lí người dùng
              </ListItem>
            </NavLink>
            <NavLink
              to="coursemanagement"
              className={({ isActive }) =>
                classNames('rounded-lg', {
                  'text-primary-main bg-black ': isActive,
                })
              }
              onClick={closeDrawer}
            >
              <ListItem>
                <ListItemPrefix>
                  <BookOpenIcon className="h-5 w-5" />
                </ListItemPrefix>
                Quản lí khóa học
              </ListItem>
            </NavLink>

            <ListItem onClick={handleLogout}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}
