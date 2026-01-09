import { axiosApi } from "./axios";

export const loginApi = (data: { email: string; password: string }) =>
  axiosApi.post("/auth/login", data);

export const signupApi = (data: { email: string; password: string }) =>
  axiosApi.post("/auth/signup", data);

export const verifyOtpApi = (data: { refId: string; otp: string }) =>
  axiosApi.post("/auth/verify-otp", data);
