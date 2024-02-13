import React from 'react';
import Swal from 'sweetalert2';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

import {
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { deleteCourseAPI } from '../../../../apis/courseAPI';

export default function CourseItem({
  courses,
  classes,
  index,
  fetchCourse,
  onOpen,
  open,
  courseCategories,
  setCourseList,
  onOpenDialog: handleOpenDialog,
  onSelect,
}) {
  const { maKhoaHoc, tenKhoaHoc, luotXem, nguoiTao, hinhAnh } = courses;
  const handleDeleteCourse = async (idKhoaHoc) => {
    try {
      await deleteCourseAPI(idKhoaHoc);
      await fetchCourse();
      Swal.fire({
        icon: 'success',
        title: 'Xoá thành công',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error || 'Xoá không thành công',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <tr key={index}>
      <td className={classes}>{index + 1}</td>
      <td className={classes}>
        <Typography variant="paragraph" className="w-[30px]">
          {maKhoaHoc}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="paragraph" className="w-[150px] truncate">
          {tenKhoaHoc}
        </Typography>
      </td>
      <td className={classes}>
        <div className="w-[130px]">
          <img src={hinhAnh} className="w-full h-[100px] " />
        </div>
      </td>
      <td className={`${classes} text-center`}>
        <Typography variant="paragraph" className="w-[30px]">
          {luotXem}
        </Typography>
      </td>
      <td className={`${classes}`}>
        <div className="w-max">
          <Chip
            size="sm"
            variant="ghost"
            value={nguoiTao.hoTen}
            color={
              nguoiTao.hoTen === 'paid'
                ? 'green'
                : nguoiTao.hoTen === 'pending'
                ? 'amber'
                : 'red'
            }
          />
        </div>
      </td>
      <td className={classes}>
        <Tooltip content="Edit Course">
          <IconButton
            variant="text"
            onClick={() => {
              onSelect(courses);
              setTimeout(() => onOpen(true), 0);
            }}
          >
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
        {/* {
          <DialogEditCourse
            open={open}
            onOpen={onOpen}
            courseCategories={courseCategories}
            setCourseList={setCourseList}
            strokeWidth={2}
          />
        } */}

        <Tooltip content="Delete Course">
          <IconButton
            variant="text"
            onClick={() => handleDeleteCourse(maKhoaHoc)}
          >
            <TrashIcon strokeWidth={2} className="h-4 w-4 text-red-500" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
}
