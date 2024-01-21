import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();
  

  const handleSignup= ()=>{
    const externalSignupUrl = 'https://dev-apv4j778khzorwcb.us.auth0.com/u/signup?state=hKFo2SBOV2RuTzJSeXc0NlAwcXJraUFzeXNFT0JtR3lhQ3dxSKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEJvUFp3azFpRGpWcVZORW8xeF9kU0JsQnhHLWxOckh5o2NpZNkgUzJzYjVpTE8wN1lLODQxeWJka0hqVGVJQmtDMURJTW0'; // Replace with your desired external URL

    // Redirect the user to the external signup page
    window.open(externalSignupUrl, '_blank');
  }


  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:5000/auth/register';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate('/'); 
        window.location.reload();
        setLoginStatus('Login successful');
      } else {
        const errorData = await response.json();
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

        <p>OR</p>
          <ul style={{listStyle:'none'}}>
        {/* <li><button onClick={loginWithPopup}>loginWithPopup</button></li> */}
        <li>
          <button onClick={handleSignup} style={{width:'200px', marginTop:'-5px', marginRight:'30px'}}>Redirect  SignUp</button>
          </li>
        {/* <li>
          <button>SignOut</button>
        </li> */}

          </ul>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
