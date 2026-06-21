import axiosInstance from "./axios";

export const getAllPlans = async () => {
  const response = await axiosInstance.get("/plans");

  return response.data;
};

export const getPlanById = async (id) => {
  const response = await axiosInstance.get(
    `/plans/${id}`
  );

  return response.data;
};