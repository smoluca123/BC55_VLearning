import { Typography } from '@material-tailwind/react';
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Box({ title, children, listCheck, className: _class }) {
  return (
    <div
      className={
        'relative p-6 text-left overflow-hidden text-white before:absolute before:block before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-[linear-gradient(90deg,hsla(0,0%,100%,0)_0,hsla(0,0%,100%,.3))] before:skew-x-[-17deg] hover:before:left-full before:z-10 before:transition-all before:duration-1000 ' +
        _class
      }
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant="paragraph">{children}</Typography>

      <div className="mt-2">
        {listCheck &&
          listCheck.map((item, index) => {
            const { icon: Icon, content } = item;
            return (
              <div className="flex items-center mt-1" key={index}>
                <Icon className="min-w-6 w-6 h-6 mr-1" />
                <Typography variant="small">{item.content}</Typography>
              </div>
            );
          })}
      </div>
    </div>
  );
}
