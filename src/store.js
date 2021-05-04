import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './redux/userData';
import toogleReducer from './redux/toogle';

export default configureStore({
  reducer: {
    userData: userDataReducer,
    toogle: toogleReducer,
  },
});
