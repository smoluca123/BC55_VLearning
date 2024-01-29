import { Button, Progress } from '@material-tailwind/react';
import classNames from 'classnames';
import React from 'react';

export default function ProgressBox({
  color: _color,
  className: _className,
  skillName,
  value: _value,
  label: _label,
}) {
  return (
    <div className="flex items-center">
      <Button className={classNames('min-w-20 max-w-20 ', _className)}>
        {skillName}
      </Button>
      <Progress
        value={_value}
        color={_color}
        className="h-5 ml-4"
        label={_label}
      />
    </div>
  );
}
