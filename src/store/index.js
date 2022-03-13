import { configureStore } from '@reduxjs/toolkit';
import contractsReducer from './slices/contracts';
import splitSizeReducer from './slices/split-sizes';
import { localStorageMiddleware } from './localStorageMiddleware';

export const store = configureStore({
  reducer: {
    contractsReducer,
    splitSizeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
