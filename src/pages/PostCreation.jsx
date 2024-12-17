import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

const PostCreation = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePostCreation = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await API.post("/posts/", { title, content }); // Token is automatically added via API interceptors
      alert("Post created successfully!");
      navigate(`/posts/${response.data.id}`); // Redirect to the single post view
    } catch (error) {
      const errorText =
        error?.response?.data?.detail || "Failed to create post. Please try again.";
      setErrorMessage(errorText);
      console.error("Post Creation Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Post</h2>
      <form onSubmit={handlePostCreation}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-control"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Create Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default PostCreation;
