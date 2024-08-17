import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice';
import { filterReducer } from './filters/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoritesReducer } from './favorites/slice';
import storage from 'redux-persist/lib/storage';

const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['cars'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
    favorites: favoritesReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
