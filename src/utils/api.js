import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "./tokenUtils"; // Token utility file

// Determine if the environment is development
const isLocal = import.meta.env.MODE === "development";

// Set the base URL dynamically with fallback
const API_URL = isLocal
  ? import.meta.env.VITE_API_BASE_URL_LOCAL || "http://localhost:8000/api/"
  : import.meta.env.VITE_API_BASE_URL_DEPLOY || "https://cwt.onrender.com/api/";

// Create an Axios instance
const API = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Enable cookies for secure token handling
});

// Helper function to format error messages
export const formatErrorMessage = (error) => {
  if (error.response && error.response.data) {
    const { status, data } = error.response;
    const message =
      typeof data === "string"
        ? data
        : data.detail ||
          (data.errors && Object.values(data.errors).flat().join(", ")) ||
          "An error occurred";
    return `Error ${status}: ${message}`;
  }
  return "Network error. Please try again.";
};

// Helper function to handle interceptor errors
const handleInterceptorError = (error) => {
  if (isLocal) console.error("Interceptor Error:", error); // Detailed logging in development
  const errorMessage = formatErrorMessage(error);
  toast.error(errorMessage, { autoClose: 3000 });
  return Promise.reject(error);
};

// Request interceptor to attach token
API.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`; // Assuming dj-rest-auth format
    }
    return config;
  },
  (error) => handleInterceptorError(error)
);

// Response interceptor for global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      // Perform logout or redirect logic
    }
    return handleInterceptorError(error);
  }
);

export default API;
