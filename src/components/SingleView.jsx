import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api";

const SingleView = () => {
  const { id } = useParams(); // Extract post ID from URL
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/posts/${id}/`);
        setPost(response.data);
      } catch (error) {
        const errorText =
          error?.response?.data?.detail || "Failed to load post. Please try again.";
        setErrorMessage(errorText);
        console.error("Single Post Fetch Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) {
    return <div className="spinner-border text-primary" role="status"></div>;
  }

  if (errorMessage) {
    return (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    );
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{post.title}</h2>
      <p className="text-muted">By {post.author}</p>
      <div className="mt-4">{post.content}</div>
      <button
        className="btn btn-secondary mt-4"
        onClick={() => navigate("/posts")}
      >
        Back to Posts
      </button>
    </div>
  );
};

export default SingleView;