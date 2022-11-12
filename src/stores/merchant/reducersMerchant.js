import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../constants/constants";

// ============================================== Fetch =============================================

export const getListTrxCus = createAsyncThunk("getListTrxCus", async () => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    let { data } = await axios.get(`${baseUrl}/transaction/listTransactionCustomer`, {
      headers: {
        access_token: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

// ============================================== Status =====================================

export const changeStatusProgress = createAsyncThunk("changeStatusProgress", async id => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    await axios.patch(`${baseUrl}/transaction/progress/${id}`, null, {
      headers: {
        access_token: token,
      },
    });
    getListTrxCus();
  } catch (error) {
    console.log(error);
  }
});

export const changeStatusReject = createAsyncThunk("changeStatusReject", async id => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    await axios.patch(`${baseUrl}/transaction/reject/${id}`, null, {
      headers: {
        access_token: token,
      },
    });
    getListTrxCus();
  } catch (error) {
    console.log(error);
  }
});

export const changeStatusDone = createAsyncThunk("changeStatusDone", async id => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    await axios.patch(`${baseUrl}/transaction/done/${id}`, null, {
      headers: {
        access_token: token,
      },
    });
    getListTrxCus();
  } catch (error) {
    console.log(error);
  }
});

// ============================================= Courier ======================================

export const registerCourier = createAsyncThunk("registerCourier", async input => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    await axios.post(`${baseUrl}/courier/register`, input, {
      headers: {
        access_token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// ============================================= Harga Edit ====================================

export const changePrice = createAsyncThunk("changePrice", async input => {
  try {
    let token = await AsyncStorage.getItem("access_token");
    await axios.patch(`${baseUrl}/merchant`, input, {
      headers: {
        access_token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

// =============================================== SLICE ==========================================

const merchantSlice = createSlice({
  name: "merchant",
  initialState: {
    loading: false,
    pending: [],
    progress: [],
    done: [],
    delivery: [],
    success: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListTrxCus.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListTrxCus.fulfilled, (state, action) => {
      let data = action.payload;
      state.pending = data.filter(e => e.status === "Pending");
      state.progress = data.filter(e => e.status === "Progress");
      state.done = data.filter(e => e.status === "Done");
      state.delivery = data.filter(e => e.status === "Delivery");
      state.success = data.filter(e => e.status === "Success" || e.status === "Reject");
      state.loading = false;
    });
  },
});

export const { actions, reducer } = merchantSlice;
export default reducer;
