import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const apiUrl = 'http://localhost:5000/auth/register';
      const response = await fetch (apiUrl,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,password}),
      })

      if(response.ok){
        const data = await response.json();
        navigate('/');
        setName('');
        setEmail('');
        setPassword('');
        
      }

      else{
        const errorData = await response.json();
        console.log('Signup failed');
      }

    }
    catch (error) {
      console.error('Signup failed:', error);
    }
    

  }
  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <input type="text" placeholder='First and last name' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail (e.target.value)} />

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              style={{ height: '85%', width: '100%', fontSize: '16px', marginRight: '10px' }}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="Password-icon" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
          </div>

          <button type='submit'>Sign Up</button>
          <p>
            Already have an account? 
            <Link to='/login' className='lacc'>Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
