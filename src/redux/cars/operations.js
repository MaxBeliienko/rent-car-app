import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://66bc3ea424da2de7ff69bab1.mockapi.io/rentcar/cars';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page = 1, limit = 4 }, thunkApi) => {
    try {
      const { data } = await axios.get('', {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
