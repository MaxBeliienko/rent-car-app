import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      if (state.items.includes(carId)) {
        state.items = state.items.filter(_id => _id !== carId);
      } else {
        state.items.push(carId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
