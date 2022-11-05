import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default transactionSlice.reducer;
