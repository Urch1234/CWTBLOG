import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="display-1">404</h1>
      <p className="lead">Oops! The page you&#39;re looking for doesn&#39;t exist.</p>

      <img
        src="https://via.placeholder.com/400x250?text=404+Not+Found"
        alt="404 Not Found"
        className="img-fluid mb-4"
      />
      <Link to="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
