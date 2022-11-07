import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/transactionSlice';

export default configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
