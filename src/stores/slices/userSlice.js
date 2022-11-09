import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: "",
    //update abis bikin order
    // transactionToPending: false,
    transactionData: null,
  },

  reducers: {
    getAccessToken: (state, payload) => {
      state.access_token = payload.payload;
    },

    getTransactionData: (state, payload) => {
      // console.log(payload);
      state.transactionData = payload.payload;
    },

    logout: state => {
      state.access_token = "";
    },
  },
});

export const { updateTransactionToPending, getAccessToken, getTransactionData, logout } =
  userSlice.actions;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
