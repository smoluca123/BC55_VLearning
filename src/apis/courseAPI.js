import baseAPI from './baseAPI';

const getCourseCategoryAPI = async () => {
  try {
    const { data } = await baseAPI.get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
    return data;
  } catch (error) {
    if (error.response) throw error.response?.data?.content;
    throw error.message;
  }
};

export { getCourseCategoryAPI };