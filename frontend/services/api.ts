import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60000,
});

export default api;
