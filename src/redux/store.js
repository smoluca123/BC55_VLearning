import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from '../components/Loading/slices/loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});

export default store;
