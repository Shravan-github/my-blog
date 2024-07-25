import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import Header from './Header';
import Footer from './Footer'; 
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:title" element={<BlogPostDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
