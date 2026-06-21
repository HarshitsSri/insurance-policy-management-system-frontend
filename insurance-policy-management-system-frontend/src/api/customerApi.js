import axiosInstance from "./axios";

// CREATE PROFILE
export const createProfile = async (profileData) => {
  const response = await axiosInstance.post(
    "/customers/profile",
    profileData
  );

  return response.data;
};

// VIEW OWN PROFILE
export const getProfile = async () => {
  const response = await axiosInstance.get(
    "/customers/profile"
  );

  return response.data;
};

// UPDATE PROFILE
export const updateProfile = async (profileData) => {
  const response = await axiosInstance.put(
    "/customers/profile",
    profileData
  );

  return response.data;
};