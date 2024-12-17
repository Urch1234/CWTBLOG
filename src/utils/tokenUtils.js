export const getToken = () => localStorage.getItem("token");
export const setToken = (token) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");

export const logout = () => {
  removeToken();
  window.location.href = "/login"; // Redirect to the login page
};
