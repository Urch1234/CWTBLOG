import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <div className="container mt-5">
      <h2>All Posts</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p className="text-muted">By {post.author}</p>
            <Link to={`/posts/${post.id}`} className="btn btn-primary">
              View Post
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
