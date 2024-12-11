import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // Added navigate hook

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page after logout
  };

  const renderAuthLinks = () => {
    return !localStorage.getItem("token") ? (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login" aria-label="Login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register" aria-label="Register">
            Register
          </Link>
        </li>
      </>
    ) : (
      <li className="nav-item">
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          aria-label="Logout"
        >
          Logout
        </button>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/" aria-label="Home">
          Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-label="Home">
                Home
              </Link>
            </li>
            {renderAuthLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
