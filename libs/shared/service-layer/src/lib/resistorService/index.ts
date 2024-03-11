import { AxiosResponse } from 'axios';

import { instance as axios } from '../axiosInstance';

import { CONFIG_URL, TYPES_URL } from '@resistor-calculator/constants';

import { ResistorTypes, ResistorBandConfig } from '@resistor-calculator/types';

const getResistorConfig = async (bands: string): Promise<AxiosResponse<ResistorBandConfig[]>> => {
  return axios.get(`/resistor${CONFIG_URL}/${bands}`);
};

const getResistorTypes = async (): Promise<AxiosResponse<ResistorTypes[]>> => {
  return axios.get(`/resistor${TYPES_URL}`);
};

export const resistorService = {
  getResistorConfig,
  getResistorTypes,
};
