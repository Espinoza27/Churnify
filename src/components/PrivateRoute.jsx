import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthProvider"

const PrivateRoute = ({ component }) => {
  const auth = useContext(AuthContext);
  const session = auth.session;

  if (session === undefined) {
    return <div>Loading...</div>
  }
  else {
    return <div>{session ? component : <Navigate to = "/signin" />}</div>
  }
}

export default PrivateRoute