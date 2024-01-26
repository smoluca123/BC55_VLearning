import baseAPI from './baseAPI';

const signinAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post(
      '/QuanLyNguoiDung/DangNhap',
      credentials
    );
    return data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error.message;
  }
};

const signupAPI = async (credentials) => {
  try {
    const { data } = await baseAPI.post('/QuanLyNguoiDung/DangKy', credentials);
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data;
    throw error.message;
  }
};

export { signinAPI, signupAPI };
