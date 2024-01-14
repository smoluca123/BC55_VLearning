import React, { useEffect, useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Input,
} from '@material-tailwind/react';
import { FaSearch } from 'react-icons/fa';
import { Bars2Icon } from '@heroicons/react/24/solid';
import NavList from './NavList';
import ProfileMenu from './ProfileMenu';

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
    <Navbar className="mx-auto w-full max-w-full p-2 lg:rounded-md lg:pl-6 fixed top-0 left-0 right-0">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex max-w-[400px] justify-between items-center">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hover:animate-_zoomInOut"
          >
            <img
              src="/assets/img/logo.png"
              alt="Cybersoft Logo"
              className="w-full"
            />
          </Typography>
          <Input
            label="Tìm kiếm khóa học"
            className="group"
            icon={
              <FaSearch className="hover:text-black cursor-pointer transition-colors duration-300" />
            }
          />
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
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <div className="w-[400px]">
          {/* <Button size="sm" variant="text">
            <span>Log In</span>
          </Button> */}
          <ProfileMenu />
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
