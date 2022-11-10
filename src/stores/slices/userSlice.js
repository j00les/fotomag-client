import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    access_token: "",
    //update abis bikin order
    // transactionToPending: false,
    transactionData: null,
    //merchant register
    selectedLongLat: "",
    userLong: "",
    userLat: "",
  },

  reducers: {
    getAccessToken: (state, payload) => {
      state.access_token = payload.payload;
    },
    getTransactionData: (state, payload) => {
      state.transactionData = payload.payload;
    },

    logoutDong: state => {
      state.access_token = "";
    },

    getLongLatForRegister: (state, payload) => {
      const { payload: longlat } = payload;
      state.selectedLongLat = longlat;
    },

    getUserLongLat: (state, payload) => {
      console.log(payload.payload.coords.latitude);
      // console.log(payload?.payload?.coords?.longitude, "ch");
      // console.log(payload.payload.coords.latitude);
      // console.log(payload?.payload?.coords?.latitude, "ch");
      // console.log(payload.payload.coords.longitude, "ch");
      state.userLat = payload?.payload?.coords?.latitude;
      state.userLong = payload?.payload?.coords?.longitude;
    },
  },
});

export const {
  getLongLatForRegister,
  updateTransactionToPending,
  getAccessToken,
  getTransactionData,
  getUserLongLat,
  logoutDong,
} = userSlice.actions;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
