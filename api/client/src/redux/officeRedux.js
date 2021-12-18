import { createSlice } from '@reduxjs/toolkit';

const officeSlice = createSlice({
  name: 'office',
  initialState: {
    offices: [],
    loading: false,
    error: false
  },
  reducers: {
    getOfficeStart: (state) => {
      state.loading = true;
    },
    getOfficeSuccess: (state, { payload }) => {
      state.loading = false;
      state.offices = payload;
    },
    getOfficeFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    addOfficeStart: (state) => {
      state.loading = true;
    },
    addOfficeSuccess: (state, { payload }) => {
      state.loading = false;
      state.offices.push(payload);
    },
    addOfficeFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    deleteOfficeStart: (state) => {
      state.loading = true;
    },
    deleteOfficeSuccess: (state, { payload }) => {
      state.loading = false;
      state.offices = state.offices.filter((item) => item._id !== payload)
    },
    deleteOfficeFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getOfficeStart,
  getOfficeSuccess,
  getOfficeFail,
  addOfficeStart,
  addOfficeSuccess,
  addOfficeFail,
  deleteOfficeStart,
  deleteOfficeSuccess,
  deleteOfficeFail, } =
  officeSlice.actions;
export default officeSlice.reducer;
