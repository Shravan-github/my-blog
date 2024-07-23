import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPostItem = ({ post, onClick }) => {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer', marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostItem;
