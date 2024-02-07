import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function UserPagination({
  totalPage,
  onChangePage,
  currentPage,
  isLoading,
}) {
  const [active, setActive] = useState(+currentPage);

  const getItemProps = (index) => {
    return {
      variant: active == index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => setActive(index),
      className: 'rounded-full',
    };
  };

  const next = () => {
    if (active > totalPage) return;

    setActive(+active + 1);
  };

  const prev = () => {
    if (active < 1) return;

    setActive(active - 1);
  };

  useEffect(() => {
    onChangePage(active);
  }, [active]);
  return (
    <div className="flex justify-center items-center gap-4 py-4">
      <Button
        variant="text"
        className="hidden sm:flex items-center gap-2 rounded-full"
        onClick={() => {
          setActive(1);
        }}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> First
      </Button>
      <Button
        variant="text"
        className="flex items-center rounded-full"
        onClick={prev}
        disabled={isLoading || active === 1}
      >
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {(currentPage == 1 || totalPage <= 3) &&
          Array.from({ length: totalPage >= 3 ? 3 : totalPage }).map(
            (_page, index) => {
              return (
                <IconButton key={index} {...getItemProps(index + 1)}>
                  {index + 1}
                </IconButton>
              );
            }
          )}
        {currentPage > 1 && totalPage > 3 && (
          <>
            <IconButton className="hidden md:flex" variant="text">
              ...
            </IconButton>
            <IconButton {...getItemProps(currentPage - 1)}>
              {currentPage - 1}
            </IconButton>
            <IconButton {...getItemProps(currentPage)}>
              {currentPage}
            </IconButton>
            {totalPage >= currentPage + 1 && (
              <>
                <IconButton {...getItemProps(currentPage + 1)}>
                  {currentPage + 1}
                </IconButton>
                <IconButton className="hidden md:flex" variant="text">
                  ...
                </IconButton>
              </>
            )}
          </>
        )}
      </div>
      <Button
        variant="text"
        className="flex items-center rounded-full"
        onClick={next}
        disabled={isLoading || active === totalPage}
      >
        Next
      </Button>
      <Button
        variant="text"
        className="hidden sm:flex items-center gap-2 rounded-full"
        onClick={() => {
          setActive(totalPage);
        }}
        disabled={active === totalPage}
      >
        Last
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
