import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';
import { useAuth0 } from '@auth0/auth0-react';  // Import useAuth0


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(''); // Added login status state
  const navigate = useNavigate(); // Corrected usage of useNavigate
  const { login } = useAuth();

    // Use useAuth0 hook to get authentication methods and user information
    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


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
          <p>OR</p>
          <ul style={{listStyle:'none'}}>
          <li><button onClick={loginWithRedirect} style={{width:'200px', marginTop:'-5px', marginRight:'30px'}}>Redirect Login</button></li>
        {/* <li><button onClick={logout}>logout</button></li> */}
        </ul>
        </form>
      </div>
    </div>
  );
};

export default Login;
