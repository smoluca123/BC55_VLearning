import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

export default function ScrollTop() {
  return (
    <div>
      <ScrollToTop
        className="!bg-primary-main  flex justify-center items-center hover:!bg-colorSecondary-main transition-colors duration-300"
        smooth
        color="white"
        top={200}
        viewBox="0 0 24 30"
        svgPath="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
    </div>
  );
}
