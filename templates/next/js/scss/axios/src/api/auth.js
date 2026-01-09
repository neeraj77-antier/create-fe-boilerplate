import { axiosApi } from "./axios";

export const loginApi = (data) => axiosApi.post("/auth/login", data);

export const signupApi = (data) => axiosApi.post("/auth/signup", data);

export const verifyOtpApi = (data) => axiosApi.post("/auth/verify-otp", data);
