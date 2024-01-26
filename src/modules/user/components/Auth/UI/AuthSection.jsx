import React from 'react';

export default function AuthSection({ children }) {
  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center bg-white">
      {children}
    </div>
  );
}
