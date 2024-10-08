import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
const WelcomePage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };

  const submitInfo = (e) => {
    e.preventDefault();

    const templateParams = {
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      message: 'Reg info',
    };
    
    emailjs.send('service_odsmdwx', 'template_x5rfa1a', templateParams, 'yUaPytDThYMXb_Jc7')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      }, (err) => {
        alert("Failed to send form");
      });
  };
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <p>Welcome SuperHacker You Are Inz</p>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <button onClick={submitInfo}>Submit Info</button>
        <br />
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  