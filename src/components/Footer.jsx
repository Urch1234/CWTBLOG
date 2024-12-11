import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>My Blog</h5>
            <p className="mb-0">
              © {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link
              to="/about"
              className="text-white text-decoration-none me-3"
              aria-label="About Us"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white text-decoration-none"
              aria-label="Contact Us"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
