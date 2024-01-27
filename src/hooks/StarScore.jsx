import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function StarScore() {
  const starScore = (rate) => {
    return [
      <StarIcon
        key={Math.random()}
        className="w-6 h-6 text-colorSecondary-main"
      />,
      <StarIcon
        key={Math.random()}
        className="w-6 h-6 text-colorSecondary-main"
      />,
      <StarIcon
        key={Math.random()}
        className="w-6 h-6 text-colorSecondary-main"
      />,
      <StarIcon
        key={Math.random()}
        className="w-6 h-6 text-colorSecondary-main"
      />,
      <StarIcon
        key={Math.random()}
        className="w-6 h-6 text-colorSecondary-main"
      />,
      <StarIcon key={Math.random()} className="w-6 h-6 text-gray-400" />,
      <StarIcon key={Math.random()} className="w-6 h-6 text-gray-400" />,
      <StarIcon key={Math.random()} className="w-6 h-6 text-gray-400" />,
      <StarIcon key={Math.random()} className="w-6 h-6 text-gray-400" />,
      <StarIcon key={Math.random()} className="w-6 h-6 text-gray-400" />,
    ].slice(5 - rate, 10 - rate);
  };
  return { starScore };
}
