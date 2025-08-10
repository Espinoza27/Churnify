import React from 'react'
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {

    const auth = useContext(AuthContext);
    const signOut = auth.signOut;
    const navigate = useNavigate();
    
    const handleSignOut = async () => {
        await signOut();
        navigate
        navigate('/');
    }

  return (
    <button onClick = {handleSignOut}>Sign Out</button>
  )
}

export default SignOut