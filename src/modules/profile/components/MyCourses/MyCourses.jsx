import { Input, Typography } from '@material-tailwind/react';
import React from 'react';
import GroupInput from '../InfomationBox/components/GroupInput';
import MyCourseList from './MyCourseList';
import { useForm } from 'react-hook-form';

export default function MyCourses() {
  const { register, watch } = useForm({
    defaultValues: {
      searchText: '',
    },
  });
  return (
    <div>
      <div className="flex justify-between items-center">
        <Typography variant="h6" color="black">
          KHÓA HỌC CỦA TÔI
        </Typography>
        <div className="">
          <Input label="Tìm khóa học" {...register('searchText')} />
        </div>
      </div>
      <div className="mt-8">
        <MyCourseList watch={watch} />
      </div>
    </div>
  );
}
