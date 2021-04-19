import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'house',
  initialState: {
    houses: [
      {
        title: 'Beautiful family apartment',
        description:
            'Newly renovated rare studio apt on basement level with lots of light and luxury detail. Located in historic Williamsburg in a 1901 house',
        image: '/imgs/houses/todd-kent-178j8tJrNlc-unsplash.jpg',
        rent: 3600,
      },
      {
        title: 'Beach Apartment',
        description: 'An apartment for couple with the sight of the beach',
        image: '/imgs/houses/todd-kent-178j8tJrNlc-unsplash.jpg',
        rent: 3600,
      },
      {
        title: 'Forest Apartment',
        description: 'An apartment for couple with the sight of the Forest',
        image: '/imgs/houses/webaliser-_TPTXZd9mOo-unsplash.jpg',
        rent: 3600,
      },
    ],
  },
  reducers: {
    addHouse: (state, action) => {
      const tempState = state;
      tempState.status = action.payload;
    },
  },
});

export const { addHouse } = counterSlice.actions;

export default counterSlice.reducer;
