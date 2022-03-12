import { configureStore } from '@reduxjs/toolkit';
import contractsReducer from './slices/contracts';

export const store = configureStore({
  reducer: {
    contractsReducer,
  },
});
