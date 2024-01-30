import { Button, Input } from '@material-tailwind/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchText: '',
    },
  });
  const submitBtn = useRef();
  const handleSearchCourse = (value) => {
    const { searchText } = value;
    if (searchText) {
      navigate(`/courses?search=${searchText}`);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSearchCourse)}>
      <Input
        label="Tìm kiếm khóa học"
        className="group"
        icon={
          <FaSearch
            className="hover:text-black cursor-pointer transition-colors duration-300"
            onClick={() => {
              submitBtn.current.click();
            }}
          />
        }
        {...register('searchText')}
      />
      <button className="hidden" type="submit" ref={submitBtn}></button>
    </form>
  );
}
