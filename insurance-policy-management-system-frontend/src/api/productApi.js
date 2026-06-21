import axiosInstance from "./axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get(
    "/products"
  );
//   console.log("API Response =", response.data);

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(
    `/products/${id}`
  );

  return response.data;
};