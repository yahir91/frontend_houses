import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'toogle',
  initialState: {
    toogle: false,
  },
  reducers: {
    changeToogle: (state, action) => {
      const tempState = state;
      tempState.toogle = action.payload;
    },
  },
});

export const { changeToogle } = counterSlice.actions;

export default counterSlice.reducer;
