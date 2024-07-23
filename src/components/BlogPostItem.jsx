import React from 'react';





const BlogPostItem = ({ post, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', marginBottom: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogPostItem;

