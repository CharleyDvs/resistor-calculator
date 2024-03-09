import { instance as axios } from '../axiosInstance';

const getResistorConfig = async (bands: string) => {
  return axios.get(`/resistorConfig/${bands}`);
};

const getResistorTypes = async () => {
  return axios.get('/resistorTypes');
};

export const resistorService = {
  getResistorConfig,
  getResistorTypes,
};
