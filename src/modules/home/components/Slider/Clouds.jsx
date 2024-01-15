import React from 'react';
import Cloud from './Cloud';

export default function Clouds() {
  return (
    <>
      <Cloud className="absolute top-6 w-40 animate-cloudMove" />
      <Cloud className="absolute left-10 top-28 w-64 animate-cloudMoveSlow" />
      <Cloud className="absolute left-24 top-64 w-36 animate-cloudMove" />
    </>
  );
}
