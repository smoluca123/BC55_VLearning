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

const getCourseListByCategoryAPI = async (categoryId) => {
  try {
    const { data } = await baseAPI.get('/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc', {
      params: {
        maDanhMuc: categoryId,
      },
    });
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

const getCourseListPaginationAPI = async (page, pageSize, searchParams) => {
  try {
    const { data } = await baseAPI.get(
      '/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang',
      {
        params: {
          page,
          pageSize,
          ...searchParams,
        },
      }
    );
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const getCourseDetailAPI = async (courseId) => {
  try {
    const { data } = await baseAPI.get('/QuanLyKhoaHoc/LayThongTinKhoaHoc', {
      params: {
        maKhoaHoc: courseId,
      },
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const joinCourseAPI = async (maKhoaHoc, taiKhoan) => {
  try {
    const { data } = await baseAPI.post('/QuanLyKhoaHoc/GhiDanhKhoaHoc', {
      maKhoaHoc,
      taiKhoan,
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};
export {
  getCourseCategoryAPI,
  getCourseListAPI,
  getCourseListPaginationAPI,
  getCourseDetailAPI,
  joinCourseAPI,
  getCourseListByCategoryAPI,
};
