import { Button, Typography } from '@material-tailwind/react';
import { TypeAnimation } from 'react-type-animation';
import Clouds from './Clouds';
import Shapes from './Shapes';

export default function Slider() {
  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row justify-around items-center h-[900px] overflow-hidden">
      <Shapes />
      <div className="w-full text-center md:text-left md:w-1/2 flex justify-center items-center">
        <div className="">
          <Typography variant="h1">
            Chào mừng
            <br /> đến với môi trường
          </Typography>
          <Typography variant="h1" className="text-primary-main">
            <TypeAnimation
              sequence={['', 1000, 'V learning', 2000]}
              cursor={true}
              repeat={Infinity}
            />
          </Typography>
          <Button className="bg-colorSecondary-main mt-4">Bắt đầu nào</Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <Clouds />

        <div className="absolute bottom-[45%] left-[38%] animate-rotateMessage origin-bottom">
          <img src="/assets/img/message_slider.png" width={120} />
        </div>
        <img className="w-full" src="/assets/img/slider2.png" alt="" />
      </div>
    </div>
  );
}
