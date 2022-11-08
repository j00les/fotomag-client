import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
