import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(password === newConfirmPassword || password === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const apiUrl = 'http://localhost:5000/auth/register';
      const requestBody = { name, email, password, confirmPassword };
  
      console.log('Request Payload:', requestBody);
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.status === 200) {
        if (!(name.trim() && email.trim() && password.trim() && confirmPassword.trim())) {
          alert('All fields are required');
          return;
      }
      
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
        const data = await response.json();
        navigate('/login');
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.log('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input type="text" placeholder="First and last name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{ height: '85%', width: '100%', fontSize: '16px', marginRight: '10px' }}
              value={password}
              onChange={(e)=>{
                handlePasswordChange(e);
                setPassword(e.target.value);
              }}
            />

            <div className="Password-icon" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
          </div>

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          />

          {!passwordMatch && password !== '' && confirmPassword !== '' && (
            <p style={{ color: 'red' }}>Passwords do not match. Please check again.</p>
          )}

          <button disabled={!passwordMatch} type="submit">
            Sign Up
          </button>

          <p>
            Already have an account?
            <Link to="/login" className="lacc">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
