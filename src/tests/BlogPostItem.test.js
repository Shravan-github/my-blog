import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostItem from '../components/BlogPostItem';

test('renders BlogPostItem', () => {
  const post = {
    title: 'Test Title',
    description: 'Test Description',
    publishedAt: '2024-07-22T12:34:56Z',
  };

  render(<BlogPostItem post={post} onClick={() => {}} />);

  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
  expect(screen.getByText('7/22/2024')).toBeInTheDocument();
});


