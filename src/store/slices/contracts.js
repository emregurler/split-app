import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContracts, fetchContractsKeys } from 'store/mockapi';

const initialState = {
  data: [],
  contractsKeys: [],
  selectedContract: undefined,
  columnFilter: [],
  loading: false,
  error: '',
};

export const fetchContractsKeysThunk = createAsyncThunk(
  'contracts/fetchContractsKeysThunk',
  (year) =>
    fetchContractsKeys(year)
      .then((res) => res.data)
      .catch((err) => err)
);

export const fetchContractsThunk = createAsyncThunk('contracts/fetchContractsThunk', (year) =>
  fetchContracts(year)
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
    setSelectedContractKey: (state, { payload }) => {
      state.selectedContract = payload;
    },
  },
  extraReducers: {
    [fetchContractsThunk.pending]: (state) => {
      state.loading = true;
    },
    [fetchContractsThunk.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [fetchContractsThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [fetchContractsKeysThunk.pending]: (state) => {
      state.keysLoading = true;
    },
    [fetchContractsKeysThunk.fulfilled]: (state, { payload }) => {
      state.contractsKeys = payload || [];
      state.selectedContract = payload && payload[0];
      state.keysLoading = false;
    },
    [fetchContractsKeysThunk.rejected]: (state, { payload }) => {
      state.contractsKeysError = payload;
      state.keysLoading = false;
    },
  },
});

export const { setColumnFilter, setInitialColumnFilter, setSelectedContractKey } =
  contractSlice.actions;

export default contractSlice.reducer;
