import { Typography } from '@material-tailwind/react';
import { Input, InputColors, Button } from '@material-tailwind/react';
import { FaChevronRight, FaRegKeyboard } from 'react-icons/fa6';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

const SITEMAP = [
  {
    title: (
      <a
        href="#"
        className="text-black  inline-block relative text-[20px] transition-all  shadow-[5px -2px 3px #54d2c0]"
      >
        <span className="text-[40px] text-[#41b294] font-black">V</span>{' '}
        Learning
        <FaRegKeyboard className="absolute right-[5px] top-[10px]" />
      </a>
    ),
    links: [
      { text: 'Điên thoại', icon: <FaPhone />, url: '#' },
      { text: 'Email', icon: <FaEnvelope />, url: '#' },
      { text: 'Địa chỉ', icon: <FaMapMarkerAlt />, url: '#' },
      { text: 'Fanpage', icon: <FaFacebook />, url: '#' },
    ],
  },
  {
    title: 'Liên kết',
    links: [
      { text: 'Trang chủ', icon: <FaChevronRight />, url: '#' },
      { text: 'Dịch vụ', icon: <FaChevronRight />, url: '#' },
      { text: 'Nhóm', icon: <FaChevronRight />, url: '#' },
      { text: 'Blog', icon: <FaChevronRight />, url: '#' },
    ],
  },
  {
    title: 'Khóa học',
    links: [
      { text: 'Front End', icon: <FaChevronRight />, url: '#' },
      { text: 'Back End', icon: <FaChevronRight />, url: '#' },
      { text: 'Full stack', icon: <FaChevronRight />, url: '#' },
      { text: 'Node Js', icon: <FaChevronRight />, url: '#' },
    ],
  },
  {
    title: 'Products',
    inputs: [
      <Input key="Họ và tên" label="Họ và tên" />,
      <Input key="Email" label="Email" />,
      <Input key="Số điện thoại " label="Số điện thoại " />,
      <Button className="mt-[10px]">Đăng ký</Button>,
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-[#f0f8ff]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map((section, index) => (
            <div key={index} className="w-full">
              {section.title &&
                (typeof section.title === 'string' ? (
                  <Typography
                    variant="small"
                    color="black-gray"
                    className="mb-4 uppercase text-[20px] font-semibold"
                  >
                    {section.title}
                  </Typography>
                ) : (
                  <div className="mb-4">{section.title}</div>
                ))}

              {section.links && section.links.length > 0 ? (
                <ul className="space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <Typography
                      key={linkIndex}
                      as="li"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <a
                        href={link.url || '#'}
                        className="flex items-center py-1 pr-2 transition-transform hover:scale-105 hover:text-[#41b294]"
                      >
                        {link.icon && (
                          <span
                            className={`mx-2 ${
                              index === 0
                                ? 'border border-solid border-[#41b294] rounded-full p-2 bg-[#41b294] text-white'
                                : ''
                            }`}
                          >
                            {link.icon}
                          </span>
                        )}
                        {link.text}
                      </a>
                    </Typography>
                  ))}
                </ul>
              ) : null}

              {section.inputs && section.inputs.length > 0 ? (
                <ul className="space-y-1">
                  {section.inputs.map((input, inputIndex) => (
                    <Typography
                      key={inputIndex}
                      as="li"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {input}
                    </Typography>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4  text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{' '}
            <a href="https://material-tailwind.com/">
              Copyright © 2021. All rights reserved
            </a>
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center text-[30px]">
            <Typography
              as="a"
              href="#"
              className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100  text-[24px] border border-solid border-[#41b294] rounded-full p-2 bg-[#41b294] text-white"
            >
              <FaFacebookF />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100  text-[24px] border border-solid border-[#41b294] rounded-full p-2 bg-[#41b294] text-white"
            >
              <FaInstagram />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100  text-[24px] border border-solid border-[#41b294] rounded-full p-2 bg-[#41b294] text-white"
            >
              <FaTwitter />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100  text-[24px] border border-solid border-[#41b294] rounded-full p-2 bg-[#41b294] text-white"
            >
              <FaGithub />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
