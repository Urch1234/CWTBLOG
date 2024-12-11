import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";
import { toast } from "react-toastify";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    username: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
    password1: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    password2: yup.string().oneOf([yup.ref('password1'), null], "Passwords must match").required("Confirm password is required"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = [];
    schema
      .validate(formData, { abortEarly: false })
      .catch((err) => {
        err.inner.forEach((error) => {
          errors.push(error.message);
        });
      });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessages([]); // Reset errors on submit

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await register(formData);
      toast.success("Registration successful!", { autoClose: 3000 });
      navigate("/login");
    } catch (err) {
      const errors = err.response?.data
        ? Object.values(err.response.data).flat()
        : ["Registration failed. Please try again."];
      setErrorMessages(errors);
      toast.error("Registration failed. Please try again.", { autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h1>Register</h1>
      {errorMessages.length > 0 && (
        <ul className="alert alert-danger">
          {errorMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          autoFocus
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          aria-label="Email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password1"
          value={formData.password1}
          onChange={handleChange}
          required
          minLength="8"
          aria-label="Password"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          required
          minLength="8"
          aria-label="Confirm Password"
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={
          isLoading ||
          !formData.username ||
          !formData.email ||
          !formData.password1 ||
          !formData.password2
        }
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default Register;
