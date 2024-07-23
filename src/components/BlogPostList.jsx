import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPostItem from "./BlogPostItem";
import { useNavigate } from "react-router-dom";

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
    <div>
      {error ? (
        <p>{`Error: ${error}`}</p>
      ) : (
        <>
          {posts.map((post, index) => (
            <BlogPostItem
              key={index}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
          <div>
            {currentPage > 1 && (
              <button onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
              </button>
            )}
            {currentPage < totalPages && (
              <button onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPostList;
