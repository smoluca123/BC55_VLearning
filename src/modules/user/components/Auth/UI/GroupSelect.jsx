import { Option, Select, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

export default function GroupSelect({
  label,
  classLabel,
  classSelect,
  children,
  value: _value,
  onChange: _onChange,
  trigger,
}) {
  const selectRef = useRef();

  return (
    <>
      <Typography
        variant="h6"
        color="blue-gray"
        className={classNames('-mb-3 ', classLabel)}
      >
        {label}
      </Typography>

      <Select
        className={classNames('border-t-[rgb(176_190_197)] ', classSelect)}
        label="Mã Nhóm"
        labelProps={{
          className: 'before:content-none after:content-none hidden',
        }}
        value={_value}
        onChange={(value) => {
          _onChange(value);
        }}
      >
        {children}
      </Select>
    </>
  );
}
