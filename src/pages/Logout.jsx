import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from auth.js
      localStorage.removeItem("token"); // Clear token from localStorage
      alert("Logged out successfully!");
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      alert("Failed to log out. Please try again.");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Are you sure you want to log out?</h1>
      <button className="btn btn-danger m-3" onClick={handleLogout}>
        Confirm Logout
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Cancel
      </button>
    </div>
  );
};

export default Logout;
