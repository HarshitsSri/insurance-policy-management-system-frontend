import axiosInstance from "./axios";

// Purchase Policy
export const purchasePolicy = async (data) => {
  const response = await axiosInstance.post(
    "/policies/purchase",
    data
  );

  return response.data;
};

// My Policies
export const getMyPolicies = async () => {
  const response = await axiosInstance.get(
    "/policies/my-policies"
  );

  return response.data;
};

// Policy By Id
export const getPolicyById = async (id) => {
  const response = await axiosInstance.get(
    `/policies/${id}`
  );

  return response.data;
};