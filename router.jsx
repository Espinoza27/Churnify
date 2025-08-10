import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import SignIn from "./src/components/SignIn";
import SignUp from "./src/components/SignUp";
import Dashboard from "./src/routes/Dashboard";
import PrivateRoute from "./src/components/PrivateRoute";

const router = () => {
  return createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/dashboard", element: <PrivateRoute component={<Dashboard />} /> },
  ]);
};

export default router;
