import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../constants/constants";

// ============================== Fetch ========================

export const getListTrxCou = createAsyncThunk("getListTrxCou", async () => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    let { data } = await axios.get(`${baseURL}/transaction/listTransactionCourier`, {
      headers: {
        access_token: token,
      },
    });
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
  extraReducers: builder => {
    builder.addCase(getListTrxCou.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListTrxCou.fulfilled, (state, action) => {
      let data = action.payload;
      state.done = data.filter(e => e.status === "Done");
      state.delivery = data.filter(e => e.status === "Delivery");
      state.delivered = data.filter(e => e.status === "Delivered");
      state.loading = false;
    });
  },
});

export default courierSlice.reducer;
