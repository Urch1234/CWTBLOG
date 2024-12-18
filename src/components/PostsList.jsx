// import { Link } from "react-router-dom";

// const PostsList = ({ posts }) => {
//   return (
//     <div className="container mt-5">
//       <h2>All Posts</h2>
//       <ul className="list-group">
//         {posts.map((post) => (
//           <li key={post.id} className="list-group-item">
//             <h5>{post.title}</h5>
//             <p className="text-muted">By {post.author}</p>
//             <Link to={`/posts/${post.id}`} className="btn btn-primary">
//               View Post
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsList;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostsList = ({ posts }) => {
  if (!posts) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p className="text-muted">No posts available. Check back later!</p>
      ) : (
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
      )}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PostsList;
