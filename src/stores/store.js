import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./slices/userSlice";
import MerchantReducer from "./merchant/reducersMerchant";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
    merchant: MerchantReducer,
    user: userReducer,
  },
});
