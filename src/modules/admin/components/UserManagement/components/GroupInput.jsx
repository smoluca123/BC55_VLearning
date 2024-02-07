import { Alert, Input, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import React, { useState } from 'react';

export default function GroupInput({
  label,
  type,
  placeholder,
  classInput,
  classLabel,
  register,
  errors,
  watch,
}) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Typography
        variant="h6"
        color="blue-gray"
        className={classNames('-mb-3 ', classLabel)}
      >
        {label}
      </Typography>
      <Input
        type={type ?? 'text'}
        size="lg"
        placeholder={placeholder}
        className={classNames(
          ' !border-t-blue-gray-200 focus:!border-t-gray-900 ',
          classInput
        )}
        labelProps={{
          className: 'before:content-none after:content-none',
        }}
        {...register}
        error={!!errors}
        success={!errors && watch != ''}
      />
      {errors && <Alert color="red">{errors.message}</Alert>}
    </div>
  );
}
