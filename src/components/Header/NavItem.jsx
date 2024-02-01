import { MenuItem, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import React, { createElement } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavItem({ navItem }) {
  const { label, href, icon } = navItem;
  return (
    <Typography
      key={label}
      variant="small"
      color="gray"
      className="font-medium text-blue-gray-500"
    >
      <NavLink
        to={href}
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
  );
}
