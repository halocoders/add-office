import { createSlice } from '@reduxjs/toolkit';
// import moment from 'moment';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: [],
    oneCompany: {},
    loading: false,
    error: false,
  },
  reducers: {
    getCompanyStart: (state) => {
      state.loading = true;
    },
    getCompanySuccess: (state, { payload }) => {
      state.loading = false;
      state.companies = payload;
      state.error = false;
    },
    getCompanyFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    getOneCompanyStart: (state) => {
      state.loading = true;
    },
    getOneCompanySuccess: (state, { payload }) => {
      state.loading = false;
      state.oneCompany = payload;
      state.error = false;
    },
    getOneCompanyFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    addCompanyStart: (state) => {
      state.loading = true;
    },
    addCompanySuccess: (state, { payload }) => {
      state.loading = false;
      state.companies.push(payload);
    },
    addCompanyFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    deleteCompanySuccess: (state, { payload }) => {
      state.loading = false;
      state.companies = state.companies.filter((item) => item._id !== payload)
    },
    deleteCompanyFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getCompanyStart,
  getCompanySuccess,
  getCompanyFail,
  getOneCompanyStart,
  getOneCompanySuccess,
  getOneCompanyFail,
  addCompanyStart,
  addCompanySuccess,
  addCompanyFail,
  deleteCompanySuccess,
  deleteCompanyFail,
} = companySlice.actions;
export default companySlice.reducer;
