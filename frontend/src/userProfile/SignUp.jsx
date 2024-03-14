import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Userprofile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://simply-goods-server.vercel.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials (cookies)
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        try {
          const data = await response.json();
          setErrorMessage('');
          navigate('/');
        } catch (error) {
          console.error('Error parsing JSON:', error);
          setErrorMessage('Invalid JSON response from the server.');
        }
      } else {
        const data = await response.json(); // Get the response as JSON
        setErrorMessage(data.errorMessage || 'Error in creating user profile');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up </h2>
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
          <p style={{ padding: '10px', textAlign: 'center', fontSize: '15px' }}>
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>
          {errorMessage && <p className="error-message" style={{textAlign:'center'}}>{errorMessage}</p>}
          <p style={{ fontSize: '20px'}}>Already have an account? 
            <Link to="/login" style={{ textDecoration: 'none', fontSize: '20px', marginLeft:'10px' }}>
              Log In Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Userprofile;
