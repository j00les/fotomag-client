import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slices/userSlice";
import MerchantReducer from "./merchant/reducersMerchant";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
    merchant: MerchantReducer,
  },
});
