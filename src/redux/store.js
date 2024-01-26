import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from '../components/Loading/slices/loadingSlice';
import authSlice from '../modules/user/slices/authSlice';

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    auth: authSlice,
  },
});

export default store;
