import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"
import { useState, useContext } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const signIn = auth.signIn;

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const result = await signIn(email, password);
    const session = result.data.session
    const error = result.error

    if (result.success) {
        navigate('/dashboard');
    }
    else {
        setError(error.message);
        setTimeout(() => {
            setError('');
        }, 3000);
    }
  }
  return (
    <div className = "signin-container">
        <form onSubmit = {handleSignIn}>
            <h1>Sign In</h1>
            <p>Dont have an account? <Link to = "/signup">Sign Up</Link></p>
            
            <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            />
            
            <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button> Sign In</button>
          {error && <p>{error}</p>}
        </form>


    </div>
  )
}

export default SignIn