import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://5847-36-78-13-68.ap.ngrok.io";

import {
  getAccessToken,
  getTransactionData,
  updateTransactionToPending,
} from "../slices/userSlice";

export const createOrder = order => async (dispatch, getState) => {
  console.log("masuk ga sih");

  try {
    const formData = new FormData();
    let token = await AsyncStorage.getItem("access_token");
    const { address, fileUrl, colorVariant, isJilid, duplicate, location, atkId } = order;
    const { latitude, longitude } = location;

    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("colorVariant", colorVariant);
    formData.append("isJilid", isJilid);
    formData.append("location", JSON.stringify(location));
    formData.append("duplicate", duplicate);
    formData.append("fileURL", {
      uri: fileUrl.uri,
      type: fileUrl.type,
      name: fileUrl.name,
    });

    // console.log(`${baseURL}/transaction/${atkId}`);
    const response = await fetch(`${baseURL}/transaction/${atkId}`, {
      method: "POST",
      headers: {
        access_token: token,
        "Content-type": "multipart/form-data",
      },
      body: formData,
    });

    const responseJson = await response.json();

    dispatch(getTransactionData(responseJson));
  } catch (err) {
    console.log(err);
  }
};

export const fetchNearest = () => async dispatch => {
  try {
    // const {data} = await axios
  } catch (err) {}
};
