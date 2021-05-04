import axios from 'axios';

const baseUrl = 'https://houses-api-yahir.herokuapp.com';

export const authRequests = async (method, path, data) => {
  const result = await axios[method](`${baseUrl}/${path}`, data);

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
