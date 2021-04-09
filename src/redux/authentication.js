import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'authentication',
  initialState: {
    status: false,
  },
  reducers: {
    changeLogStatus: (state, action) => {
      const tempState = state;
      tempState.status = action.payload;
    },
  },
});

export const { changeLogStatus } = counterSlice.actions;

export default counterSlice.reducer;
