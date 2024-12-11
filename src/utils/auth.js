import API from "./api";

// Common function to handle authentication
export const handleAuth = async (endpoint, data) => {
  try {
    const response = await API.post(endpoint, data);
    if (response.data?.key) {
      localStorage.setItem("token", response.data.key);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Authentication failed." };
  }
};

// Login function
export const login = (email, password) =>
  handleAuth("dj-rest-auth/login/", { email, password });

// Register function
export const register = (data) =>
  handleAuth("dj-rest-auth/registration/", data);
