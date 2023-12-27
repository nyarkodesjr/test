import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const commentItemStyle = {
    marginBottom: '20px',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const strongStyle = {
    color: '#333',
  };
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Comments</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {comments.map((comment) => (
          <li key={comment.id} style={commentItemStyle}>
            <strong style={strongStyle}>{comment.name}</strong>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
