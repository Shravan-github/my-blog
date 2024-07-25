import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPostItem = ({ post, onClick }) => {
  return (
    <Card onClick={onClick} sx={{ cursor: 'pointer', mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostItem;
