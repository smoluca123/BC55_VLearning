import React, { useEffect, useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Input,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavList from './NavList';
import ProfileMenu from './ProfileMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-full p-2 lg:rounded-md lg:pl-6 fixed top-0 left-0 right-0 z-[999]">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex max-w-[400px] justify-between items-center">
          <Link to="/">
            <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hover:animate-_zoomInOut">
              <img
                src="/assets/img/logo.png"
                alt="Cybersoft Logo"
                className="w-[200px] lg:w-full"
              />
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <Input
              label="Tìm kiếm khóa học"
              className="group"
              icon={
                <FaSearch className="hover:text-black cursor-pointer transition-colors duration-300" />
              }
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton>

        <div className="md:w-[400px] w-auto text-right">
          <Menu>
            <MenuHandler>
              <Button className="hover:text-primary-main hover:bg-white">
                Thành Viên
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="text-center hover:!text-primary-main">
                Đăng ký
              </MenuItem>
              <MenuItem className="text-center hover:!text-primary-main">
                Đăng nhập
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <ProfileMenu /> */}
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
