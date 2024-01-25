import { ChevronDownIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { getCourseCategoryAPI } from '../../apis/courseAPI';
import { NavLink } from 'react-router-dom';

export default function NavListMenu() {
  const [navListMenuItems, setNavListMenuItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getCourseCategory = async () => {
      try {
        const data = await getCourseCategoryAPI();
        setNavListMenuItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourseCategory();
  }, []);

  const renderItems = navListMenuItems.map(({ maDanhMuc, tenDanhMuc }) => (
    <NavLink to="/" key={maDanhMuc}>
      <MenuItem className="group">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 group-hover:text-primary-main transition-colors duration-300"
        >
          {tenDanhMuc}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          Các khóa học về {tenDanhMuc}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <NavLink to="/">
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full uppercase font-bold hover:text-primary-main transition-colors duration-300">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{' '}
                Danh Mục{' '}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </MenuItem>
            </Typography>
          </NavLink>
        </MenuHandler>
        <MenuList className="hidden w-auto grid-cols-2 gap-3 overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{' '}
        Pages{' '}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}
