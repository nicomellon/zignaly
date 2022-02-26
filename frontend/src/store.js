import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './phonesSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});
