import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from '../cars/selectors';

export const selectFavorites = state => state.favorites.items;

export const selectFavoriteCars = createSelector(
  [selectCars, selectFavorites],
  (cars, favorites) => cars.filter(car => favorites.includes(car._id))
);
