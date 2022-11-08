const baseURL = 'https://b184-36-78-13-68.ngrok.io';
import axios from 'axios';
// const baseURL = 'http://localhost:8080';

//handle order form

export const createOrder = order => dispatch => {
  const formData = new FormData();
  const { address, fileUrl, colorVariant, isJilid, duplicate, location } = order;

  formData.append('fileUrl', fileUrl);
  formData.append('address', address);
  formData.append('colorVariant', colorVariant);
  formData.append('isJilid', isJilid);
  formData.append('location', location);
  formData.append('duplicate', duplicate);

  axios({
    url: `${baseURL}/coba-dong`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: {
      formData,
    },
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};
