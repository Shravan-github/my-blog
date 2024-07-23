import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogPostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state.post;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} style={{ maxWidth: '100%' }} />}
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogPostDetails;
