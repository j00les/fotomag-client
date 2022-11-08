const baseURL = 'https://0ba3-202-80-217-104.ap.ngrok.io';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAccessToken, updateTransactionToPending } from '../slices/userSlice';

export const createOrder = order => async (dispatch, getState) => {
  try {
    const formData = new FormData();
    const { access_token } = getState().user;

    const { address, fileUrl, colorVariant, isJilid, duplicate, location, atkId } = order;
    const removeQt = access_token.replace(/"/g, '');
    console.log(fileUrl);

    formData.append('address', address);
    formData.append('colorVariant', colorVariant);
    formData.append('isJilid', isJilid);
    formData.append('location', location);
    formData.append('duplicate', duplicate);
    formData.append('fileURL', {
      uri: fileUrl.uri,
      type: fileUrl.type,
      name: fileUrl.name,
    });

    const { data } = await axios.post(`${baseURL}/transaction/${atkId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        access_token: removeQt,
      },
      transformRequest: (data, headers) => {
        return data; // this is doing the trick
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const getToken = val => dispatch => {
  dispatch(getAccessToken(val));
};
