import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setPhones: (state, action) => (state = action.payload),
  },
});

export const { setPhones } = phonesSlice.actions;

export default phonesSlice.reducer;
