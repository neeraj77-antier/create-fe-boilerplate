import axios from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
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
