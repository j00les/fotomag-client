import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const URL = "https://e07d-36-78-13-68.ap.ngrok.io";

// ============================== Fetch ========================

export const getListTrxCou = createAsyncThunk("getListTrxCou", async () => {
  try {
    let { data } = await axios.get(
      `${URL}/transaction/listTransactionCourier`,
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4MDEyMjE5fQ.y3kVpw2wmNH2I-jGzFYwzjaKPHW78eNpB1DscpIOYhE",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const courierSlice = createSlice({
  name: "courier",
  initialState: {
    loading: false,
    done: [],
    delivery: [],
    delivered: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getListTrxCou.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListTrxCou.fulfilled, (state, action) => {
      let data = action.payload;
      state.done = data.filter((e) => e.status === "Done");
      state.delivery = data.filter((e) => e.status === "Delivery");
      state.delivered = data.filter((e) => e.status === "Delivered");
      state.loading = false;
    });
  },
});

export default courierSlice.reducer;
