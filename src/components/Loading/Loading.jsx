import { useState } from 'react';
import {
  MagnifyingGlass,
  RotatingSquare,
  RotatingTriangles,
  Triangle,
} from 'react-loader-spinner';

const config = {
  visible: true,
  height: '200',
  width: '200',
  color: '#4fa94d',
  // ariaLabel: 'triangle-loading',
  wrapperStyle: {},
  wrapperClass: '',
};
const loaders = [
  <Triangle {...config} ariaLabel="triangle-loading" />,
  <RotatingSquare {...config} ariaLabel="" />,
  <MagnifyingGlass
    {...config}
    ariaLabel="magnifying-glass-loading"
    wrapperClass="magnifying-glass-wrapper"
    glassColor="#c0efff"
  />,
  <RotatingTriangles {...config} ariaLabel="rotating-triangles-loading" />,
];
export default function Loading() {
  const [currentLoaderIndex, setCurrentLoaderIndex] = useState(
    Math.floor(Math.random() * loaders.length)
  );

  return (
    <>
      <div className="fixed w-screen h-screen flex flex-col items-center justify-center bg-black z-[9999]">
        {currentLoaderIndex !== null && loaders[currentLoaderIndex]}
        {/* <div className="absolute top-[55%]">
          <ProgressBar {...config} />
        </div> */}
      </div>
    </>
  );
}
