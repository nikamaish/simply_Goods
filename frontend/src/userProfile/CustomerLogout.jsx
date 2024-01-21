// Logout.jsx
// import { useContext } from 'react';
import React, {useContext, useEffect } from 'react';
import { useAuth } from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
const CustomerLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // const apiUrl = 'https://gm-backend-qfd5.onrender.com/auth';
        const apiUrl = 'http://localhost:5000/auth';
        const response = await fetch(`${apiUrl}/logout`, {
          method: 'GET',
          credentials: 'include', // Include credentials for sessions/cookies
        });

        if (response.ok) {
          // Successful logout on the backend, now perform the logout on the frontend
          logout();
          navigate('/');
          
        } else {
          // Handle logout failure
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    // Call the logout function when the component mounts
    handleLogout();
  }, [logout]);

  return (
    <div>
      {/* <h2>Logging out...</h2> */}
      {/* <h2>LogOut</h2> */}
      {/* You can add a loading spinner or any other visual indication here */}
    </div>
  );
};

export default CustomerLogout;
