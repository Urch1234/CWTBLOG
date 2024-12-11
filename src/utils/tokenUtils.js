// tokenUtils.js

// Function to get the token from local storage
export const getToken = () => {
  return localStorage.getItem("token"); // Here can be replaced  with cookies or a more secure storage mechanism if needed
};

// Function to set the token in local storage
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Function to remove the token from local storage (used for logout)
export const removeToken = () => {
  localStorage.removeItem("token");
};
