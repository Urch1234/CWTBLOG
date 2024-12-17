import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

// Check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token && token !== ""; // Check if token exists and is valid
};

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle redirection if not authenticated
  const promptSignIn = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log("Fetching posts...");
    
    // If not authenticated, prompt sign-in
    if (!isAuthenticated()) {
      promptSignIn();
      return; // Stop fetching posts if not authenticated
    }

    const fetchPosts = async () => {
      try {
        const res = await API.get("posts/");
        console.log("Posts fetched:", res.data);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate, promptSignIn]); // Ensure navigate is updated

  if (loading) {
    console.log("Loading posts...");
    return (
      <div className="container mt-4">
        <p>Loading posts...</p>
      </div>
    );
  }

  console.log("Rendering posts...");
  return (
    <div className="container mt-4">
      <h1>Welcome to the CWT Blog</h1>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default Home;
