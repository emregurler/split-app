import { configureStore } from '@reduxjs/toolkit';
import contractsReducer from './slices/contracts';
import splitSizeReducer from './slices/split-sizes';

export const store = configureStore({
  reducer: {
    contractsReducer,
    splitSizeReducer,
  },
});
