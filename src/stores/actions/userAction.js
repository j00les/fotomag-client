const baseURL = "https://84c7-36-78-13-68.ap.ngrok.io";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getAccessToken,
  getTransactionData,
  updateTransactionToPending,
} from "../slices/userSlice";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    const formData = new FormData();
    const { access_token } = getState().user;

    const {
      address,
      fileUrl,
      colorVariant,
      isJilid,
      duplicate,
      location,
      atkId,
    } = order;
    const removeQt = access_token.replace(/"/g, "");
    const { latitude, longitude } = location;

    console.log(latitude, longitude);

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

    const response = await fetch(`${baseURL}/transaction/${atkId}`, {
      method: "POST",
      headers: {
        access_token: removeQt,
        "Content-type": "multipart/form-data",
      },
      body: formData,
    });

    const responseJson = await response.json();
    // console.log(responseJson);
    dispatch(getTransactionData(responseJson));
    // if (!responseJson.ok) throw ;
  } catch (err) {
    console.log(err);
  }
};


export const fetchNearest = () => async dispatch => {
  try {
    // const {data} = await axios
  } catch (err) {}

};
