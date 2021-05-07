import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = 'http://localhost:4000';

const cookies = new Cookies();

export const useAxios = async (path, data) => {
  const result = await axios.post(`http://localhost:4000/${path}`, data)
    .then(res => {
      const { token } = res.data;
      cookies.set('TOKEN', token, {
        path: '/',
      });
    });

  return result;
};

export const logOutRequest = async (method, path, headers) => {
  const result = await axios[method](`${baseUrl}/${path}`, headers);

  return result;
};

export const getAndDeleteRequests = async (method, path, headers) => {
  const result = await axios[method](`${baseUrl}/${path}`, headers);

  return result;
};

export const addToFavorites = async (method, path, data, headers) => {
  const result = await axios[method](`${baseUrl}/${path}`, data, headers);

  return result;
};

export default baseUrl;
