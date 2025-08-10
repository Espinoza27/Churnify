import React from "react";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const auth = useContext(AuthContext);
  const signOut = auth.signOut;
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="px-5 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition duration-300 font-medium"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
