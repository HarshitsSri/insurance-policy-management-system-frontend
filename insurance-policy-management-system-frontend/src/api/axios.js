import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // Login/Register request par token mat bhejo
  if (token && !config.url?.includes("/auth/login") &&!config.url?.includes("/auth/register")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;