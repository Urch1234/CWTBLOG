import API from "./api";
import { setToken } from "./tokenUtils";

// Common function for handling authentication
export const handleAuth = async (endpoint, data, saveToken = false) => {
  try {
    const response = await API.post(endpoint, data);
    if (saveToken && response.data?.key) {
      setToken(response.data.key);
    }
    return response.data;
  } catch (error) {
    console.error("Authentication Error:", error.response?.data);
    throw error.response?.data || { message: "Authentication failed." };
  }
};

// Login: Save token after successful authentication
export const login = async (email, password) => {
  return handleAuth("dj-rest-auth/login/", { email, password }, true);
};

// Register: Do not save token on registration
export const register = async (data) => {
  return handleAuth("dj-rest-auth/registration/", data, false);
};
