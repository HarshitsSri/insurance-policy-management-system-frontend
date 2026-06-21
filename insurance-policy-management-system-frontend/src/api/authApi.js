import axiosInstance from "./axios";

export const loginApi = (data) => {
  return axiosInstance.post(
    "/auth/login",
    data
  );
};

export const registerApi = (data) => {
  return axiosInstance.post(
    "/auth/register",
    data
  );
};

export const verifyOtpApi = (data) => {
  return axiosInstance.post(
    "/auth/verify-otp",
    data
  );
};