import axios from 'axios';
import { API_PORT } from '@resistor-calculator/constants';

export const instance = axios.create({
  baseURL: `http://localhost:${API_PORT}`,
  timeout: 1000,
});
