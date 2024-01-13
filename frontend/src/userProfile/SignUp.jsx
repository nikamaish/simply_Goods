import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(''); // Added login status state
  const navigate = useNavigate(); // Corrected usage of useNavigate

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:5000/auth/register';
      const response = await fetch( apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  email, password }),
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
          <h2>Sign Up</h2>
          {/* <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{ height: '85%', width: '100%', fontSize: '16px', marginRight: '10px' }}
              value={password}
              onChange={handlePasswordChange}
            />

            <div className="Password-icon" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
          </div>



          <button type="submit">Continue</button>
          <p>
            Already Account?
            <Link to="/login" className="lacc">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
