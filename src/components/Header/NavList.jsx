import { FaCircleInfo } from 'react-icons/fa6';
import { SiMicrosoftacademic } from 'react-icons/si';
import { ImPencil } from 'react-icons/im';
import { MdEvent } from 'react-icons/md';

import NavListMenu from './NavListMenu';
import { MenuItem, Typography } from '@material-tailwind/react';
import { createElement } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// nav list component
const navListItems = [
  {
    label: 'Khóa Học',
    href: '/courses',
    icon: SiMicrosoftacademic,
  },
  {
    label: 'Blog',
    href: '/blog',
    icon: ImPencil,
  },
  {
    label: 'Sự kiện',
    href: '/events',
    icon: MdEvent,
  },
  {
    label: 'Thông tin',
    href: '/media',
    icon: FaCircleInfo,
  },
];

export default function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, href = '#' }, key) => (
        <Typography
          key={label}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <NavLink
            to={href}
            key={Math.random() * key}
            className={({ isActive, isPending }) =>
              classNames(
                'text-gray-900 text-center uppercase font-bold group-hover:text-primary-main transition-colors duration-300',
                {
                  '!text-primary-main': isActive,
                  'text-gray-500': isPending,
                }
              )
            }
          >
            <MenuItem className="group flex items-center gap-2 lg:rounded-md">
              {createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
              <span className=""> {label}</span>
            </MenuItem>
          </NavLink>
        </Typography>
      ))}
    </ul>
  );
}
