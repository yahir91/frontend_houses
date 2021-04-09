import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './redux/authentication';
import userDataReducer from './redux/userData';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
