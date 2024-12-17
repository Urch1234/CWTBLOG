import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You need to log in to access this page.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
