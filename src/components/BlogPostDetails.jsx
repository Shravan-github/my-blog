import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Typography, CardMedia } from '@mui/material';

const BlogPostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state.post;

  return (
    <Container>
      <Button variant="contained" onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        Back
      </Button>
      <Typography variant="h3" gutterBottom>{post.title}</Typography>
      <Typography variant="body1" paragraph>{post.content}</Typography>
      {post.urlToImage && <CardMedia component="img" image={post.urlToImage} alt={post.title} style={{ maxWidth: '100%', marginBottom: '20px' }} />}
      <Typography variant="caption" color="textSecondary">
        {new Date(post.publishedAt).toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default BlogPostDetails;
