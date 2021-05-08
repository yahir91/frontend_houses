import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'userData',
  initialState: {
    user: {},
  },
  reducers: {
    addUserData: (state, action) => {
      const tempState = state;
      tempState.user = action.payload;
    },
  },
});

export const { addUserData } = counterSlice.actions;

export default counterSlice.reducer;
