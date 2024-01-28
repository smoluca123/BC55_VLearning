import { Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import React from 'react';

export default function ItemAbout({
  subtitle,
  title,
  url,
  content,
  isReverse,
}) {
  return (
    <div>
      <div className="w-full h-full">
        <div
          className={classNames(
            'flex items-center justify-between flex-col md:flex-row',
            {
              'md:!flex-row-reverse': isReverse,
            }
          )}
        >
          <div className="mx-10 my-8 w-[60%] text-center md:text-left">
            <div
              className={classNames('py-6', {
                // 'text-right': isReverse,
              })}
            >
              <Typography variant="h4" className="text-primary-main">
                {subtitle}
              </Typography>
              <Typography variant="h2" className="text-black">
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className={classNames(
                  'text-lg leading-9 text-gray-700 first-letter:text-6xl first-letter:text-[#cd5c5c] first-letter:font-medium first-letter:float-left first-letter:pt-1 pr-4 first-letter:font',
                  {
                    //   'ml-auto': isReverse,
                  }
                )}
              >
                {content}
              </Typography>
            </div>
          </div>
          <div className="w-[40%] flex justify-center">
            <img src={url} alt="" width={450} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
}
