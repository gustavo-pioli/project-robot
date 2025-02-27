import axios from 'axios';

export const apiBaseUrl = axios.create({
  baseURL: 'https://store.steampowered.com/',
});
