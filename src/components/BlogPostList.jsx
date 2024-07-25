import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=Apple&from=2024-07-22&sortBy=popularity&page=${currentPage}&pageSize=10&apiKey=98ed2c68129e4d8c9f1387f991d9f341`
        );
        setPosts(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePostClick = (post) => {
    navigate(`/post/${post.title}`, { state: { post } });
  };

  return (
    <Box>
      {error ? (
        <Typography color="error">{`Error: ${error}`}</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {posts.map((post, index) => (
              <Grid item xs={12} key={index}>
                <BlogPostItem post={post} onClick={() => handlePostClick(post)} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            {currentPage > 1 && (
              <Button variant="contained" onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </Button>
            )}
            {currentPage < totalPages && (
              <Button variant="contained" onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default BlogPostList;
