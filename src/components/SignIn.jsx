import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useState, useContext } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const signIn = auth.signIn;

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Churnify
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
        >
          Back to Home
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-400">Sign in to your Churnify account</p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-indigo-400 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-indigo-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 text-sm">
        © 2025 Churnify. All rights reserved.
      </footer>
    </div>
  );
};

export default SignIn;
