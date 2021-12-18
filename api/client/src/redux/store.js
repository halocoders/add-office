import { configureStore, combineReducers } from '@reduxjs/toolkit';

import companyReducer from './companyRedux';
import officeReducer from './officeRedux';

const rootReducer = combineReducers({
  company: companyReducer,
  office: officeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
