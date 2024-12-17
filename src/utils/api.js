import axios from "axios";
import { toast } from "react-toastify";
import { getToken, logout } from "./tokenUtils";

const isLocal = import.meta.env.MODE === "development";
const API_URL = isLocal
  ? import.meta.env.VITE_API_BASE_URL_LOCAL || "http://localhost:8000/api/"
  : import.meta.env.VITE_API_BASE_URL_DEPLOY || "https://cwt.onrender.com/api/";

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Attach token to headers for authenticated requests
API.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Handle errors globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.", {
        toastId: "session-expired",
      });
      logout();
    }
    toast.error("An error occurred. Please try again.", { autoClose: 3000 });
    return Promise.reject(error);
  }
);

export default API;
