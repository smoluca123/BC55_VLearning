import { Button, Typography } from '@material-tailwind/react';
import React from 'react';

export default function WelcomeSection({
  title,
  welcome,
  btnText,
  onToggle: handleToggleActive,
}) {
  return (
    <>
      <Typography variant="h1" className="text-white">
        {title}
      </Typography>
      <Typography variant="paragraph" className="my-6">
        {welcome}
      </Typography>
      <Button
        variant="outlined"
        color="white"
        className="bg-[hsla(0,0.00%,0.00%,0.3)] hover:bg-black rounded-full px-10"
        onClick={handleToggleActive}
      >
        {btnText}
      </Button>
    </>
  );
}
