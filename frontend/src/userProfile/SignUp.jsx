import React, { useState } from 'react';
import './signup.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Userprofile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
 
  const navigate = useNavigate();
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
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
          setSuccessMessage(data.message || 'User profile created successfully!');
          setErrorMessage('');
          navigate('/login')
        } catch (error) {
          console.error('Error parsing JSON:', error);
          setErrorMessage('Invalid JSON response from the server.');
          setSuccessMessage('');
        }
      } else {
        const data = await response.text(); // Get the response as text
        setErrorMessage(data.message || 'Error in creating user profile');
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
        {/* <div className="big-container"> */}
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
            <p style={{padding:'10px', textAlign:'center', fontSize:'15px'}}>By continuing, you agree to our User Agreement and Privacy Policy.</p>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Already have an account?</p>
            <h3 ><Link to='/login' style={{textDecoration:'none', fontSize:'25px'}}>Log In Here</Link></h3>
          </form>
        
      </div>
    </div>
  );
};

export default Userprofile;
