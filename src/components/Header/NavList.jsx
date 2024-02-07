import { FaCircleInfo } from 'react-icons/fa6';
import { SiMicrosoftacademic } from 'react-icons/si';
import { ImPencil } from 'react-icons/im';
import { MdEvent } from 'react-icons/md';

import NavListMenu from './NavListMenu';
import { useSelector } from 'react-redux';
import NavItem from './NavItem';

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
  {
    label: 'Quản trị',
    href: '/admin',
    icon: FaCircleInfo,
    role: 'GV',
  },
];

export default function NavList() {
  const { currentUser } = useSelector((state) => state.auth);
  const maLoaiNguoiDung = currentUser?.maLoaiNguoiDung;
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems
        .filter((navItem) => navItem.role !== 'GV')
        .map((navItem, key) => (
          <NavItem navItem={navItem} key={Math.random() * key} />
        ))}
      {currentUser &&
        maLoaiNguoiDung === 'GV' &&
        navListItems
          .filter((navItem) => navItem.role === 'GV')
          .map((navItem, key) => (
            <NavItem navItem={navItem} key={Math.random() * key} />
          ))}
    </ul>
  );
}
