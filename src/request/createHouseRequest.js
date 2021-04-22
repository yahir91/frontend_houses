import axios from 'axios';
import baseUrl from './requestUrl';

const createHouse = formData => {
  axios.post(`${baseUrl}/houses`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default createHouse;
