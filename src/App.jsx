import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar /> {/* Always show Navbar */}
      <div className="container mt-4">
        <Routes>
          <Route path="/posts" element={<Home />} /> {/* Home page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/register" element={<Register />} /> {/* Register page */}
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                {/* Protected route */}
                <h2>Protected Page</h2>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} /> {/* Fallback for invalid routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
