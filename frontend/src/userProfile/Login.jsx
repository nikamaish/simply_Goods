import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../authContext/AuthContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(''); // Added login status state
  const navigate = useNavigate(); // Corrected usage of useNavigate
  const { login } = useAuth();



  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const apiUrl = 'https://simplygoods-server.onrender.com/auth/login';
      const apiUrl = 'http://localhost:5000/auth/login'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // window.location.reload();
        setLoginStatus('Login successful');
        // login(data); // Adjust this based on your actual user data structure
        navigate('/'); // Use navigate for navigation


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
          <div style={{ position: 'relative', width: '70%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{ height: 'auto', width: '100%', fontSize: '16px' }}
              value={password}
              onChange={handlePasswordChange}
            />

            <div
              className="Password-icon"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', top: '40%', transform: 'translateY(-50%)', right: '5px' }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
          </div>
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
