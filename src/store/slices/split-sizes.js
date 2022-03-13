import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  verticalSizes: undefined,
  upperHorizontalSizes: undefined,
  bottomHorizontalSizes: undefined,
};

export const splitSizesReducer = createSlice({
  name: 'splitSizes',
  initialState,
  reducers: {
    setSplitSize: (state, { payload }) => {
      const { sizes, name } = payload;
      state[name] = sizes;
    },
  },
});

export const { setSplitSize } = splitSizesReducer.actions;

export default splitSizesReducer.reducer;
