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
      state.transactionData = payload.payload;
    },
  },
});

export const {
  updateTransactionToPending,
  getAccessToken,
  getTransactionData,
} = userSlice.actions;

export default userSlice.reducer;
