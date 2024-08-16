import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchDetailCar } from './operations';

const initialState = {
  cars: [],
  selectedCar: null,
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
  reducers: {
    clearSelectedCar(state) {
      state.selectedCar = null;
    },
  },
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
      .addCase(fetchAllCars.rejected, (state, action) => {
        handleErrorState(state, action);
      })
      .addCase(fetchDetailCar.pending, state => {
        handlePendingState(state);
      })
      .addCase(fetchDetailCar.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchDetailCar.rejected, (state, action) => {
        handleErrorState(state, action);
      });
  },
});

export const { clearSelectedCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
