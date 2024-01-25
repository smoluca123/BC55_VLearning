import React from 'react';

export default function Shapes() {
  return (
    <>
      {/* triangleTopLeft */}
      <div className="absolute -rotate-45 top-0 left-[40px] w-0 h-0 border-transparent border-l-[20px] border-r-[20px] !border-b-[50px] border-b-[#f6ba35]"></div>

      {/* smallboxLeftTop */}
      <div className="absolute top-0 left-[40px] h-[70px] w-[10%] bg-[radial-gradient(#41b294_10%,transparent_11%),radial-gradient(#41b294_10%,transparent_11%);] bg-10-10 "></div>

      {/* smallboxRightTop */}
      <div className="absolute top-0 right-[45%] h-[70px] w-[5%] bg-[radial-gradient(#41b294_10%,transparent_11%),radial-gradient(#41b294_10%,transparent_11%)] bg-10-10 "></div>

      {/* smallboxRightBottom */}
      <div className="absolute bottom-6 right-[200px] h-[70px] w-[10%] bg-[radial-gradient(#f6ba35_10%,transparent_11%),radial-gradient(#f6ba35_10%,transparent_11%);] bg-10-10 "></div>
    </>
  );
}
