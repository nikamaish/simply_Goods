// Login.js
import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
 
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:5000/auth';
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setErrorMessage('Login successful');

        // Set the user in the authentication context upon successful login
        login(data); // Adjust this based on your actual user data structure

        // Redirect to another page upon successful login
       navigate('/') // Change '/dashboard' to your desired route
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errorMessage || 'Error logging in');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <div className="signup">
        {/* <div className="big-container"> */}
          <form onSubmit={handleSubmit}>
            <h2>Log In </h2>
            <input
              type="email"
              placeholder="Email Address"
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
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
            {/* <div className='sign-up'> */}
              <p>Do not have an account?</p>
              <h3>
                <Link to="/signup">Sign Up Here</Link>
              </h3>
            {/* </div> */}
          </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
