import {
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { createElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../modules/user/slices/authSlice';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };

  const closeMenu = () => setIsMenuOpen(false);
  // profile menu component
  const profileMenuItems = [
    {
      label: 'My Profile',
      href: '/user/profile',
      icon: UserCircleIcon,
    },
    {
      label: 'Edit Profile',
      icon: Cog6ToothIcon,
    },
    {
      label: 'Sign Out',
      icon: PowerIcon,
      onClick: handleLogout,
    },
  ];
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Typography variant="small" className="max-w-[60px] truncate">
            {currentUser && currentUser.taiKhoan}
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, onClick, href = '#' }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                classNames('', {
                  '!text-primary-main': isActive,
                })
              }
            >
              <MenuItem
                onClick={() => {
                  closeMenu();
                  onClick && onClick();
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                    : ''
                }`}
              >
                {createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                  strokeWidth: 2,
                })}

                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? 'red' : 'inherit'}
                >
                  {label}
                </Typography>
              </MenuItem>
            </NavLink>
          );
        })}
      </MenuList>
    </Menu>
  );
}
