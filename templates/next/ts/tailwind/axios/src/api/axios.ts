import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;

export const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
