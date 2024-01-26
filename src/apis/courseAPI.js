import baseAPI from './baseAPI';

const getCourseCategoryAPI = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const getCourseListAPI = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const getCourseListPaginationAPI = async (page, pageSize) => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
      {
        params: {
          page,
          pageSize,
        },
      }
    );
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};
export { getCourseCategoryAPI, getCourseListAPI, getCourseListPaginationAPI };
