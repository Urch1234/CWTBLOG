// import  { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../utils/auth";

// function Register() {
//   const [formData, setFormData] = useState({
//     email: "",
//     username: "",
//     password1: "",
//     password2: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessages, setErrorMessages] = useState([]);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessages([]);

//     // Basic frontend validation
//     if (formData.password1 !== formData.password2) {
//       setErrorMessages(["Passwords do not match"]);
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await register(formData);
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       const errors = err.response?.data
//         ? Object.values(err.response.data).flat()
//         : ["Registration failed. Please try again."];
//       setErrorMessages(errors);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form className="container mt-4" onSubmit={handleSubmit}>
//       <h1>Register</h1>
//       {errorMessages.length > 0 && (
//         <div className="alert alert-danger">
//           <ul>
//             {errorMessages.map((msg, index) => (
//               <li key={index}>{msg}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           name="password1"
//           value={formData.password1}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Confirm Password"
//           name="password2"
//           value={formData.password2}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button className="btn btn-primary" type="submit" disabled={isLoading}>
//         {isLoading ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// }

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password1: "",
    password2: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessages([]);

    // Basic frontend validation
    if (formData.password1 !== formData.password2) {
      setErrorMessages(["Passwords do not match"]);
      setIsLoading(false);
      return;
    }

    try {
      // Call the register function from auth.js
      await register(formData);
      alert("Registration successful!");
      console.log("Navigating to login page");
      navigate("/login");
    } catch (err) {
      // Log and display the error message from the backend
      const errorDetails = err.response?.data || err.message || "Registration failed. Please try again.";
      console.error("Registration error details:", errorDetails);  // Log error details
      setErrorMessages(Array.isArray(errorDetails) ? errorDetails : [errorDetails]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h1>Register</h1>
      {errorMessages.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {errorMessages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
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
        />
      </div>
      <button className="btn btn-primary" type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default Register;
