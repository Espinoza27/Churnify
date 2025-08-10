import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

const AuthProvider = ({ component }) => {
  const [session, setSession] = useState(null);

  // SIGN UP
  const signUp = async (email, password) => {
    try {
      const result = await supabase.auth.signUp({
        email: email.toLowerCase(),
        password: password,
      });
      if (result.error) {
        console.log(result.error);
        return { success: false, error: result.error };
      } else {
        return { success: true, data: result.data };
      }
    } catch (err) {
      return { success: false, error: err };
    }
  };
  // SIGN IN
  const signIn = async (email, password) => {
    try {
      const result = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });
      if (result.error) {
        console.error(result.error);
        return { success: false, error: result.error };
      } else {
        return { success: true, data: result.data };
      }
    } catch (err) {
      // Detect network errors. Err is a JS Error object. Test with wifi off.
      return { success: false, error: err };
    }
  };

  // SIGN OUT
  const signOut = async () => {
    const result = await supabase.auth.signOut();
    if (result.error) {
      console.error(result.error);
    }
  };
  // GET SESSION ON PAGE LOAD

  useEffect(() => {
    const fetchSession = async () => {
      const result = await supabase.auth.getSession();
      setSession(result.data.session);
    };
    fetchSession();
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  // Return the Auth context object we created before. The bucket we started.

  return (
    <AuthContext.Provider
      value={{
        signUp: signUp,
        signIn: signIn,
        signOut: signOut,
        session: session,
      }}
    >
      {component}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
