import baseAPI from './baseAPI';

const addUserAPI = async (user) => {
  try {
    const { data } = await baseAPI.post('/QuanLyNguoiDung/ThemNguoiDung', {
      ...user,
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const updateUserAPI = async (user) => {
  try {
    const { data } = await baseAPI.put(
      '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      {
        ...user,
      }
    );
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const deleteUserAPI = async (TaiKhoan) => {
  try {
    const { data } = await baseAPI.delete(`/QuanLyNguoiDung/XoaNguoiDung/`, {
      params: {
        TaiKhoan,
      },
    });
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const addUserToCourseAPI = async (maKhoaHoc, taiKhoan) => {
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

const getCourseInactiveFromUserAPI = async (taiKhoan) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',
      {
        taiKhoan,
      }
    );
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};
const getCourseActiveFromUserAPI = async (taiKhoan) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',
      {
        taiKhoan,
      }
    );
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

const removeCourseFromUserAPI = async (maKhoaHoc, taiKhoan) => {
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

export {
  addUserAPI,
  updateUserAPI,
  deleteUserAPI,
  addUserToCourseAPI,
  getCourseInactiveFromUserAPI,
  getCourseActiveFromUserAPI,
  removeCourseFromUserAPI,
};
