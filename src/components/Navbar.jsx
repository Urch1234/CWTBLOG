import { Link, useNavigate } from "react-router-dom";
import { getToken, logout } from "../utils/tokenUtils";

function Navbar() {
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    logout(); // Remove token and redirect
    navigate("/login"); // Explicit redirection for smooth navigation
  };

  const renderAuthLinks = () => {
    if (!token) {
      return (
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
      );
    }
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/posts/new" aria-label="Create Post">
            Create Post
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-danger"
            onClick={handleLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" aria-label="Home">
          Blog App
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
