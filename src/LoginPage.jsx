import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginData = [{username: 'admin', password: 'admin'}, {username: 'user', password: 'user'}];


  const goToLandingPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };

  const validateLogin = () => {
    if(loginData.some(data => data.username === username && data.password === password)) {
      setLoggedIn(true);
    } else {
      alert('Invalid Username or Password');
      setLoggedIn(false);
    }
  };

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={validateLogin}>Login</button>
        <br />
        <button onClick={goToLandingPage} disabled={!loggedIn}>Take Qualifier Quiz</button>
      </div>
    );
  };
  
  export default LoginPage;
  