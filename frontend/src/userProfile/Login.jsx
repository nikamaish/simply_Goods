import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(''); // Added login status state
  const navigate = useNavigate(); // Corrected usage of useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const apiUrl = 'https://simplygoods-server.onrender.com/auth/login';
      const apiUrl = 'http://localhost:5000/auth/login'
      const response = await fetch( apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/'); // Use navigate for navigation
        window.location.reload();
        setLoginStatus('Login successful');
      } else {
        const errorData = await response.json();
        // Write 'login fail' or handle the error as needed
        console.log('Login failed');
        setLoginStatus('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Continue</button>
          <p>
            Do not have an account?
            <Link to="/signup" className="lacc">
              Sign Up Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
