import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Register from './Register';
import classNames from 'classnames';
import WelcomeSection from './UI/WelcomeSection';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [rightActive, setRightActive] = useState(
    searchParams.get('page') == 'signup' || false
  );

  const handleToggleActive = () => {
    !rightActive
      ? navigate('/user?page=signup')
      : navigate('/user?page=signin');

    setRightActive(!rightActive);
  };
  useEffect(() => {
    console.log('ags');
    setRightActive(searchParams.get('page') == 'signup' || false);
  }, [searchParams.get('page')]);
  return (
    <div className="relative bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-xl mx-auto container min-h-[800px] my-10 bg-[url('https://image.slidesdocs.com/responsive-images/background/business-board-clipart-cute-blue-decorative-paintings-powerpoint-background_6bb60cad9d__960_540.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[hsla(0,0.00%,0.00%,0.1)]">
      <div
        className={classNames(
          'relative z-20 text-center flex items-center bg-white justify-center transition-transform duration-1000',
          {
            'md:translate-x-full translate-x-0': rightActive,
          }
        )}
      >
        <div
          className={classNames('animate-_fadeIn w-full', {
            hidden: rightActive,
          })}
        >
          <Login onToggle={handleToggleActive} />
        </div>
        <div
          className={classNames('animate-_fadeIn w-full', {
            hidden: !rightActive,
          })}
        >
          <Register onToggle={handleToggleActive} />
        </div>
      </div>
      <div
        className={classNames(
          'hidden md:block relative z-10 text-white transition-transform duration-1000',
          {
            'md:-translate-x-full translate-x-0': rightActive,
          }
        )}
      >
        <div
          className={classNames(
            'h-full flex flex-col items-center animate-_fadeIn justify-center px-10 transition-all duration-500',
            {
              'opacity-0 hidden': rightActive,
            }
          )}
        >
          <div className="text-center ">
            <WelcomeSection
              title="Xin chào!"
              welcome="Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!"
              btnText="Đăng ký"
              onToggle={handleToggleActive}
            />
          </div>
        </div>

        <div
          className={classNames(
            'relative z-10 h-full flex flex-col animate-_fadeIn items-center justify-center px-10 transition-all duration-500',
            {
              'opacity-0 hidden': !rightActive,
            }
          )}
        >
          <div className="text-center">
            <WelcomeSection
              title="Chào mừng bạn đã trở lại!"
              welcome="Vui lòng đăng nhập để kết nối với tài khoản của bạn"
              btnText="Đăng nhập"
              onToggle={handleToggleActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
