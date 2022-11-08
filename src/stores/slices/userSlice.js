import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    access_token: '',
    //update abis bikin order
    transactionToPending: false,
  },

  reducers: {
    getAccessToken: (state, payload) => {
      state.access_token = payload.payload;
    },

    updateTransactionToPending: (state, payload) => {
      state.transactionToPending = payload.payload;
    },
  },
});

export const { updateTransactionToPending, getAccessToken } = userSlice.actions;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
