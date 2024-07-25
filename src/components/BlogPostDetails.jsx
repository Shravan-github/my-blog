import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const BlogPostDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state.post;

  return (
    <Box>
      <Button variant="contained" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.content}
      </Typography>
      {post.urlToImage && (
        <Box component="img" src={post.urlToImage} alt={post.title} sx={{ maxWidth: '100%', mb: 2 }} />
      )}
      <Typography variant="body2" color="text.secondary">
        {new Date(post.publishedAt).toLocaleDateString()}
      </Typography>
    </Box>
  );
};

export default BlogPostDetails;
