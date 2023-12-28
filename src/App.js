import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://render-servicer-app.onrender.com/details')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const studentItemStyle = {
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
      <h1>All-Students</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {students.map((student) => (
          <li key={student.age} style={studentItemStyle}>
            <strong style={strongStyle}>{student.name}</strong>
            <p>Class Name: {student.className}</p>
            <p>Age: {student.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
