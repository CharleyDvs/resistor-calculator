import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://some-domain.com/api/',
  timeout: 1000,
});
