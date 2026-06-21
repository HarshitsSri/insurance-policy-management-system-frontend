import axiosInstance from "./axios";

export const makePayment = async (data) => {
  const response = await axiosInstance.post(
    "/payments",
    data
  );

  return response.data;
};

export const getMyPayments = async () => {
  const response = await axiosInstance.get(
    "/payments/my-payments"
  );

  return response.data;
};

export const getPaymentById = async (id) => {
  const response = await axiosInstance.get(
    `/payments/${id}`
  );

  return response.data;
};