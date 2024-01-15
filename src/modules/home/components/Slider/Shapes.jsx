import React from 'react';

export default function Shapes() {
  return (
    <>
      {/* triangleTopRight */}
      <div className="absolute -rotate-45 top-[5%] left-[10%] w-0 h-0 border-transparent border-l-[20px] border-r-[20px] !border-b-[50px] border-b-[#f6ba35]"></div>

      {/* smallboxLeftTop */}
      <div className="absolute top-[10%] left-[10%] h-[70px] w-[10%] bg-[radial-gradient(#41b294_10%,transparent_11%),radial-gradient(#41b294_10%,transparent_11%);] bg-10-10 "></div>

      {/* smallboxCenterTop */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[radial-gradient(#f6ba35_10%,transparent_11%)] rotate-45 w-[100px] h-[100px] bg-10-10 "></div>
    </>
  );
}
