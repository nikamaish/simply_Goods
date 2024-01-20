import React, { useContext, useEffect } from 'react';
import { useAuth } from  '../authContext/AuthContext';
import { useNavigate } from 'react-router-dom';


const LogOut = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

  useEffect(()=>{
    const handleLogout = async () => {
    try {
        const apiUrl ='https://localhost:5000/auth/logout';
        const response = await fetch (`${apiUrl}/logout`,{
            method: 'GET',
            credentials: 'include', // Include credentials for sessions/cookies
        })

        if (response.ok) {
            logout();
            navigate('/');
        }
        else{
            console.error('Logout failed:', response.statusText);
        }

    } catch (error) {
        console.error('Error during logout:', error);
    }
    };
    handleLogout();
  }, [logout, navigate]) 

  return (
    <div>
      
    </div>
  )
}

export default LogOut;