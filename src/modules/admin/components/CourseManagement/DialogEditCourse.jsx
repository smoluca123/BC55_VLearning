import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Option,
  DialogFooter,
  Alert,
} from '@material-tailwind/react';
import GroupInput from './components/GroupInput';
import GroupSelect from './components/GroupSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import { useForm } from 'react-hook-form';
import { addCourseAPI, updateCourseAPI } from '../../../../apis/courseAPI';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
const validationSchema = object({
  maKhoaHoc: string().required('Mã khoá học không được để trống!'),
  tenKhoaHoc: string().required('Tên khoá học không được để trống'),
  maDanhMucKhoaHoc: string().required('Danh mục khoá học không được để trống'),
  luotXem: string()
    .required('Lượt xem không được để trống')
    .matches(/^\d+$/, 'Lượt xem phải là một số'),
  taiKhoanNguoiTao: string().required('Người tạo không được để trống'),
  //hinhAnh: string().required('Hình ảnh không được để trống'),
  ngayTao: string().required('Ngày tạo không được để trống'),
  danhGia: string()
    .required('Đánh giá không được để trống')
    .matches(/^\d+$/, 'Lượt xem phải là một số')
    .required('Đánh giá không được để trống')
    .matches(/^[0-6]$/, 'Đánh giá phải là số từ 1 đến 5'),
  maNhom: string().required('Mã nhóm không được để trống'),
  moTa: string().required('Mô tả không  được để trống'),
});
export default function DialogEditCourse({
  fetchCourse,
  open,
  onOpen,
  courseCategories,
  setSelectedCategory,
  selectedCourse,
}) {
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const inputImage = useRef();
  const submitBtn = useRef();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      maKhoaHoc: selectedCourse.maKhoaHoc || '',
      maDanhMucKhoaHoc: selectedCourse.danhMucKhoaHoc.maDanhMucKhoahoc || '',
      tenKhoaHoc: selectedCourse.tenKhoaHoc || '',
      luotXem: selectedCourse.luotXem || 0,
      hinhAnh: selectedCourse.hinhAnh || '',
      danhGia: selectedCourse.danhGia || 0,
      maNhom: selectedCourse.maNhom.toUpperCase() || '',
      moTa: selectedCourse.moTa || '',
      biDanh: selectedCourse.biDanh || '',
      ngayTao: selectedCourse.ngayTao || '',
      taiKhoanNguoiTao: selectedCourse.nguoiTao.taiKhoan,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const handleChangeImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log({ abc: e.target });
      setValue('hinhAnh', e.target.files[0]);
      setImagePreview(event.target.result);
      trigger('hinhAnh');
    };
  };

  const handleEditCourse = async (course) => {
    try {
      const data = await updateCourseAPI(course);
      toast.success('Update thành công');
      onOpen();
      fetchCourse();
      reset();
    } catch (error) {
      if (typeof error !== 'string') {
        toast.error('Them that bai');
        return;
      }
      toast.error(error);
    }
  };
  useEffect(() => {
    setImagePreview(selectedCourse.hinhAnh);
  }, []);
  return (
    <>
      <Dialog
        size="lg"
        open={open}
        handler={() => onOpen(true)}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit(handleEditCourse)}>
          <Card className=" mx-auto w-full h-[100vh] overflow-scroll">
            <CardBody className="flex flex-col gap-4">
              <Typography
                variant="h3"
                color="blue-gray "
                className="uppercase text-center"
              >
                Thêm khoá học
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <GroupInput
                    label="Mã khoá học"
                    register={register('maKhoaHoc')}
                    errors={errors.maKhoaHoc}
                    watch={watch('maKhoaHoc')}
                  />
                </div>

                <div>
                  <GroupInput
                    label="Tên khoá học"
                    register={register('tenKhoaHoc')}
                    errors={errors.tenKhoaHoc}
                    watch={watch('tenKhoaHoc')}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div>
                  <GroupSelect
                    onChange={(value) => {
                      // setSelectedCategory(value);
                      setValue('maDanhMucKhoaHoc', value); // Cập nhật giá trị của maDanhMucKhoaHoc
                      trigger('maDanhMucKhoaHoc'); // Kích hoạt việc kiểm tra validation
                    }}
                    label="Danh mục khoá học"
                    errors={errors.maDanhMucKhoaHoc}
                    value={selectedCourse.danhMucKhoaHoc.maDanhMucKhoahoc}
                  >
                    {courseCategories.map(({ maDanhMuc, tenDanhMuc }) => {
                      return (
                        <Option key={maDanhMuc} value={maDanhMuc}>
                          {tenDanhMuc}
                        </Option>
                      );
                    })}
                  </GroupSelect>
                  {errors.maDanhMucKhoaHoc && (
                    <Alert color="red">
                      {' '}
                      {errors.maDanhMucKhoaHoc.message}
                    </Alert>
                  )}
                </div>

                <div>
                  <GroupInput
                    label="Ngày tạo"
                    register={register('ngayTao')}
                    errors={errors.ngayTao}
                    watch={watch('ngayTao')}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <GroupInput
                    label="Đánh giá "
                    register={register('danhGia')}
                    errors={errors.danhGia}
                    watch={watch('danhGia')}
                  />
                </div>

                <div>
                  <GroupInput
                    label="Lượt xem"
                    register={register('luotXem')}
                    errors={errors.luotXem}
                    watch={watch('luotXem')}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <GroupInput
                    label="Người tạo"
                    register={register('taiKhoanNguoiTao')}
                    errors={errors.taiKhoanNguoiTao}
                    watch={watch('taiKhoanNguoiTao')}
                  />
                </div>
                {/* <div className="">
                  <GroupInput ype="file" label="Chọn tệp" />
                </div> */}
                <div className="mt-[29px] w-full flex-col items-center gap-6">
                  <input
                    type="file"
                    hidden
                    ref={inputImage}
                    onChange={handleChangeImage}
                  />
                  <Button
                    variant="outlined"
                    className="flex items-center gap-3 w-full"
                    onClick={() => {
                      inputImage.current.click();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    Upload Files
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <GroupSelect
                    label="Mã Nhóm"
                    onChange={(value) => {
                      setValue('maNhom', value);
                      trigger('maNhom');
                    }}
                    errors={errors.maNhom}
                    value={selectedCourse.maNhom.toUpperCase()}
                  >
                    {Array.from({ length: 10 }, (v, i) => {
                      const _i = i + 1;
                      return (
                        <Option
                          key={Math.random() * _i}
                          value={`GP${_i < 10 ? '0' + _i : _i}`}
                        >
                          {`GP${_i < 10 ? '0' + _i : _i}`}
                        </Option>
                      );
                    })}
                  </GroupSelect>
                  {errors.maNhom && (
                    <Alert color="red"> {errors.maNhom.message}</Alert>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <Typography variant="h3" className="text-center uppercase">
                  Mô tả khóa học
                </Typography>
                <div className="grid grid-cols-3 my-4">
                  <div className=" w-[200px] h-[200px] ">
                    {imagePreview ? (
                      <img src={imagePreview} alt="" className="h-full" />
                    ) : (
                      <img
                        src="https://demo2.cybersoft.edu.vn/Img/ImgLogo/logo512.png"
                        alt=""
                        className="h-full"
                      />
                    )}
                  </div>
                  <div className="h-[200px] col-span-2">
                    <div class="relative w-[33rem]">
                      <div class="relative w-full min-w-[200px] h-[200px]">
                        <textarea
                          rows="8"
                          class="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          {...register('moTa')}
                        ></textarea>
                        <label
                          className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${
                            errors.moTa ? 'text-red-500' : ''
                          }`}
                        >
                          Mô tả
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {errors.moTa && (
                  <Alert color="red"> {errors.moTa.message}</Alert>
                )}
              </div>
            </CardBody>

            <DialogFooter className="my-2 mx-4">
              <Button
                variant="text"
                color="white"
                onClick={() => onOpen(true)}
                className="mr-1 bg-red-500 mx-4 hover:bg-red-500"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="black" type="submit">
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </Card>
        </form>
      </Dialog>
      <Toaster position="top-right" />
    </>
  );
}
