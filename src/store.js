import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './redux/authentication';
import userDataReducer from './redux/userData';
import toogleReducer from './redux/toogle';

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    userData: userDataReducer,
    toogle: toogleReducer
  },
});
