import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://e07d-36-78-13-68.ap.ngrok.io";

// ============================================== Fetch =============================================

export const getListTrxCus = createAsyncThunk("getListTrxCus", async () => {
  try {
    let { data } = await axios.get(
      `${URL}/transaction/listTransactionCustomer`,
      {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3OTI2MDc1fQ.6eEWanIQksBpy5dbSzhEaYhzza5MbK0u-WMW7i6i1K4",
        },
      }
    );
    console.log(data, "reducs");
    return data;
  } catch (error) {
    console.log(error);
  }
});

// ============================================== Status =====================================

export const changeStatusProgress = createAsyncThunk(
  "changeStatusProgress",
  async (id) => {
    try {
      await axios.patch(`${URL}/transaction/progress/${id}`, null, {
        headers: {
          access_token: "",
        },
      });
      getListTrxCus();
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeStatusReject = createAsyncThunk(
  "changeStatusReject",
  async (id) => {
    try {
      await axios.patch(`${URL}/transaction/reject/${id}`, null, {
        headers: {
          access_token: "",
        },
      });
      getListTrxCus();
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeStatusDone = createAsyncThunk(
  "changeStatusDone",
  async (id) => {
    try {
      await axios.patch(`${URL}/transaction/done/${id}`, null, {
        headers: {
          access_token: "",
        },
      });
      getListTrxCus();
    } catch (error) {
      console.log(error);
    }
  }
);

// ============================================= Courier ======================================

export const registerCourier = createAsyncThunk(
  "registerCourier",
  async (input) => {
    try {
      await axios.post(`${URL}/courier/register`, input, {
        headers: {
          access_token: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

// ============================================= Harga Edit ====================================

export const changePrice = createAsyncThunk(
  "changePrice",
  async (atkId, input) => {
    try {
      await axios.post(`${URL}/merchant/${atkId}`, input, {
        headers: {
          access_token: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getListTrxCus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListTrxCus.fulfilled, (state, action) => {
      console.log(action);
      let data = action.payload;
      state.pending = data.filter((e) => e.status === "Pending");
      state.progress = data.filter((e) => e.status === "Progress");
      state.done = data.filter((e) => e.status === "Done");
      state.delivery = data.filter((e) => e.status === "Delivery");
      state.success = data.filter(
        (e) => e.status === "Success" || e.status === "Reject"
      );
      state.loading = false;
    });
  },
});

export const { actions, reducer } = merchantSlice;
export default reducer;
