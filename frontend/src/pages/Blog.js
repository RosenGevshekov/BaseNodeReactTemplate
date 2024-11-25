import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/blogs')
      .then((response) => {
        console.log('API response:', response.data); // Log the API response
        setBlogs(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch blogs');
        console.error('API error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {error && <p>{error}</p>}
      {blogs.length === 0 && !error && <p>No blogs available.</p>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
