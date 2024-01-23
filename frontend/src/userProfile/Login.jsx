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
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
 
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'https://simplygoods-server.onrender.com/auth';
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setErrorMessage('');
        setSuccessMessage(data.message || 'Login Successful!')

        // Set the user in the authentication context upon successful login
        login(data); // Adjust this based on your actual user data structure
       navigate('/') // Change '/dashboard' to your desired route

      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.errorMessage || 'Error logging in');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <div className="signup">
          <form onSubmit={handleSubmit}>
            <h2>Log In </h2>
            <input
              type="email"
              placeholder="Email Address"
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
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
              <p style={{marginTop:'5vh', fontSize: '20px'}}>Do not have an account?

                <Link to="/signup" style={{textDecoration:'none', fontSize: '20px', marginLeft:'10px' }}>Sign Up Here</Link>
              </p>

          </form>
      </div>
    </div>
  );
};

export default Login;
