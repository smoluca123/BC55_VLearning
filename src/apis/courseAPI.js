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
    const { data } = await baseAPI.post('/QuanLyKhoaHoc/DangKyKhoaHoc', {
      maKhoaHoc,
      taiKhoan,
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};
const leaveCourseAPI = async (maKhoaHoc, taiKhoan) => {
  try {
    const { data } = await baseAPI.post('/QuanLyKhoaHoc/HuyGhiDanh', {
      maKhoaHoc,
      taiKhoan,
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};
const deleteCourseAPI = async (idKhoaHoc) => {
  try {
    const { data } = await baseAPI.delete('QuanLyKhoaHoc/XoaKhoaHoc', {
      params: {
        MaKhoaHoc: idKhoaHoc,
      },
    });
    return data.content;
  } catch (error) {
    if (error.response) {
      throw error.response?.data;
    }
    throw error;
  }
};
const addCourseAPI = async (course) => {
  try {
    const formDataCourse = new FormData();
    // console.log(course);
    for (const key in course) {
      formDataCourse.append(key, course[key]);
    }
    console.log(formDataCourse.get('hinhAnh'));
    const { data } = await baseAPI.post(
      '/QuanLyKhoaHoc/ThemKhoaHocUploadHinh',
      formDataCourse
    );
    return data.content;
  } catch (error) {
    if (error.response) {
      throw error.response?.data;
    }
    throw error;
  }
};

const updateCourseAPI = async (course) => {
  try {
    let formDataCourse = course;
    if (typeof course.hinhAnh !== 'string') {
      formDataCourse = new FormData();
      for (const key in course) {
        formDataCourse.append(key, course[key]);
      }
      const { data } = await baseAPI.post(
        '/QuanLyKhoaHoc/CapNhatKhoaHocUpload',
        formDataCourse
      );
      return data;
    }
    // tay dibien_gp01 png
    // const hinhAnhNameSplit = formDataCourse.hinhAnh.split('.');
    // hinhAnhNameSplit[hinhAnhNameSplit.length - 2] += '_gp01';
    // const hinhAnh = hinhAnhNameSplit.join('.');
    // formDataCourse.hinhAnh = hinhAnh
    // formDataCourse.hinhAnh += '_'
    const { data } = await baseAPI.put(
      '/QuanLyKhoaHoc/CapNhatKhoaHoc',
      formDataCourse
    );
    return data;
  } catch (error) {
    if (error.response) {
      throw error.response?.data;
    }
    throw error;
  }
};

export {
  deleteCourseAPI,
  getCourseCategoryAPI,
  getCourseListAPI,
  getCourseListPaginationAPI,
  getCourseDetailAPI,
  joinCourseAPI,
  leaveCourseAPI,
  getCourseListByCategoryAPI,
  addCourseAPI,
  updateCourseAPI,
};
