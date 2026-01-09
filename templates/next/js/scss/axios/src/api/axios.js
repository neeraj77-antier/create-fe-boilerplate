import axios from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

axiosApi.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
