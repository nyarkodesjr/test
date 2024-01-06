import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:8080/api/companies')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching data:', error));
  };
  
  useEffect(() => {
    fetchData();
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
  const deleteButtonColor={
    backgroundColor:'red',
    color:'white',
    padding:'20px',
    border:'none',
    borderRadius:'7px',
    cursor:'pointer',
    fontSize:'25px'
  }

const deleteButton=async(name,id)=>{
//alert("the company name is "+name);
//alert("the company id is "+id);

try {
  const response = await fetch(`http://localhost:8080/api/company/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Add any necessary headers like authorization token here
    },
  });

  if (response.ok) {
    fetchData();
    alert('Company deleted successfully');
    // Perform any necessary actions after deletion
  } else {
    alert('Failed to delete company');
  }
} catch (error) {
  alert('Error deleting company:', error);
}

}

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>All-Companies</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {students.map((student) => (
          <li key={student.id} style={studentItemStyle}>
            <strong style={strongStyle}>{student.id}</strong>
            <p>company Name: {student.companyName}</p>
            <p>company Address : {student.companyAddress}</p>
            <button style={deleteButtonColor} onClick={()=>deleteButton(student.companyName,student.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
