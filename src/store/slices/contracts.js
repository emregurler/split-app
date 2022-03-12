import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJsonByName, fetchJsonKeys } from 'store/mockapi';

const initialState = {
  data: [],
  jsonKeys: [],
  selectedJson: undefined,
  columnFilter: [],
  jsonData: false,
  jsonKeysData: false,
  error: '',
};

export const fetchJsonKeysThunk = createAsyncThunk('contracts/fetchJsonKeysThunk', (jsonName) =>
  fetchJsonKeys(jsonName)
    .then((res) => res.data)
    .catch((err) => err)
);

export const fetchJsonThunk = createAsyncThunk('contracts/fetchJsonThunk', (year) =>
  fetchJsonByName(year)
    .then((res) => res.data.data)
    .catch((err) => err)
);

export const contractSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    setColumnFilter: (state, { payload }) => {
      state.columnFilter = payload;
    },
    setInitialColumnFilter: (state) => {
      const exampleObject = state.data && state.data[0] && state.data[0];
      const keys = Object.keys(exampleObject);
      state.columnFilter = keys.map((key, index) => ({
        key,
        id: index,
        selected: true,
      }));
    },
    setSelectedJsonKey: (state, { payload }) => {
      state.selectedJson = payload;
    },
  },
  extraReducers: {
    [fetchJsonThunk.pending]: (state) => {
      state.jsonDataLoading = true;
    },
    [fetchJsonThunk.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.jsonDataLoading = false;
    },
    [fetchJsonThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.jsonDataLoading = false;
    },
    [fetchJsonKeysThunk.pending]: (state) => {
      state.jsonKeysLoading = true;
    },
    [fetchJsonKeysThunk.fulfilled]: (state, { payload }) => {
      state.jsonKeys = payload || [];
      state.selectedJson = payload && payload[0];
      state.jsonKeysLoading = false;
    },
    [fetchJsonKeysThunk.rejected]: (state, { payload }) => {
      state.jsonKeysError = payload;
      state.jsonKeysLoading = false;
    },
  },
});

export const { setSelectedJsonKey, setColumnFilter, setInitialColumnFilter } =
  contractSlice.actions;

export default contractSlice.reducer;
