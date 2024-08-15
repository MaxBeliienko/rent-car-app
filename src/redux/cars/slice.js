import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const handlePendingState = state => {
  state.loading = true;
  state.error = null;
};

const handleErrorState = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, state => {
        handlePendingState(state);
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        const newCars = action.payload;
        const existingCarIds = new Set(state.cars.map(car => car._id));
        const filteredNewCars = newCars.filter(
          car => !existingCarIds.has(car._id)
        );
        state.cars = [...state.cars, ...filteredNewCars];
      })
      .addCase(fetchAllCars.rejected),
      (state, action) => {
        handleErrorState(state, action);
      };
  },
});

export const carsReducer = carsSlice.reducer;
