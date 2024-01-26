import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signinAPI } from '../../../apis/userAPI';

export const signin = createAsyncThunk('auth/signin', async (credentials) => {
  try {
    const data = await signinAPI(credentials);
    return data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    isLoading: false,
    error: null,
  },
  reducers: {
    signOut: (state) => {
      localStorage.removeItem('currentUser');
      window.location.href = '/';
      return { ...state, currentUser: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      })
      .addCase(signin.fulfilled, (state, action) => {
        const data = JSON.stringify(action.payload);
        localStorage.setItem('currentUser', data);
        return {
          ...state,
          currentUser: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(signin.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
      });
  },
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
