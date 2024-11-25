import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [content, setContent] = useState(''); // Stores the "About Us" content
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    // Fetch the "About Us" content
    axios.get('/api/page/about')
      .then((response) => {
        setContent(response.data.content); // Update the state with the fetched content
      })
      .catch((err) => {
        setError('Failed to fetch About Us content');
        console.error('API error:', err);
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {error && <p>{error}</p>} {/* Display error if any */}
      <p>{content}</p> {/* Display the fetched content */}
    </div>
  );
};

export default About;
