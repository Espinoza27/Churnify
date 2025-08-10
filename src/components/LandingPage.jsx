import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Churnify
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/signin")}
            className="px-5 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Component */}
      <main className="flex flex-1 flex-col lg:flex-row items-center justify-center px-8 lg:px-20 gap-12 pt-25 lg:pt-0">
        {/* Left Side */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Predict & Prevent <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Customer Churn
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Churnify leverages machine learning algorithms to achieve{" "}
            <span className="text-green-400 font-bold">~90% accuracy</span> in
            predicting customer behavior. Know which customers are at risk{" "}
            before they leave and take proactive action to retain them.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Right Side - AI GENERATED DATA FLOW SVG */}
        <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[500px] flex items-center justify-center">
          {/* Background glow */}
          <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Data Flow SVG */}
          <svg
            className="relative z-10 w-80 h-80"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="rgba(34, 211, 238, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-spin"
              style={{ animationDuration: "20s" }}
            />

            {/* Data input nodes */}
            <circle
              cx="80"
              cy="150"
              r="8"
              fill="#22d3ee"
              className="animate-pulse"
            />
            <circle
              cx="80"
              cy="190"
              r="8"
              fill="#22d3ee"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <circle
              cx="80"
              cy="230"
              r="8"
              fill="#22d3ee"
              className="animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
            <circle
              cx="80"
              cy="270"
              r="8"
              fill="#22d3ee"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Processing center */}
            <circle
              cx="200"
              cy="200"
              r="40"
              fill="rgba(129, 140, 248, 0.2)"
              stroke="#818cf8"
              strokeWidth="2"
              className="animate-pulse"
            />
            <circle
              cx="200"
              cy="200"
              r="25"
              fill="rgba(147, 51, 234, 0.3)"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <circle
              cx="200"
              cy="200"
              r="12"
              fill="#9333ea"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Output nodes */}
            <circle
              cx="320"
              cy="180"
              r="10"
              fill="#22c55e"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="320"
              cy="220"
              r="10"
              fill="#ef4444"
              className="animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />

            {/* Flow lines */}
            <path
              d="M 88 150 Q 140 150 160 180"
              fill="none"
              stroke="rgba(34, 211, 238, 0.6)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
            <path
              d="M 88 190 Q 140 190 160 190"
              fill="none"
              stroke="rgba(34, 211, 238, 0.6)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M 88 230 Q 140 230 160 210"
              fill="none"
              stroke="rgba(34, 211, 238, 0.6)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <path
              d="M 88 270 Q 140 270 160 220"
              fill="none"
              stroke="rgba(34, 211, 238, 0.6)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.7s" }}
            />

            <path
              d="M 240 190 Q 280 180 310 180"
              fill="none"
              stroke="rgba(34, 197, 94, 0.6)"
              strokeWidth="3"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M 240 210 Q 280 220 310 220"
              fill="none"
              stroke="rgba(239, 68, 68, 0.6)"
              strokeWidth="3"
              className="animate-pulse"
              style={{ animationDelay: "1.2s" }}
            />

            {/* Labels */}
            <text x="50" y="140" fill="#22d3ee" fontSize="12" fontWeight="bold">
              Data
            </text>
            <text
              x="170"
              y="280"
              fill="#818cf8"
              fontSize="12"
              fontWeight="bold"
            >
              AI Processing
            </text>
            <text
              x="280"
              y="160"
              fill="#22c55e"
              fontSize="10"
              fontWeight="bold"
            >
              Stay
            </text>
            <text
              x="275"
              y="240"
              fill="#ef4444"
              fontSize="10"
              fontWeight="bold"
            >
              Churn
            </text>

            {/* Floating particles */}
            <circle
              cx="120"
              cy="120"
              r="2"
              fill="#22d3ee"
              opacity="0.7"
              className="animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            />
            <circle
              cx="280"
              cy="120"
              r="2"
              fill="#818cf8"
              opacity="0.7"
              className="animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
            />
            <circle
              cx="120"
              cy="300"
              r="2"
              fill="#9333ea"
              opacity="0.7"
              className="animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "2s" }}
            />
            <circle
              cx="280"
              cy="300"
              r="2"
              fill="#22c55e"
              opacity="0.7"
              className="animate-bounce"
              style={{ animationDelay: "1.5s", animationDuration: "2.5s" }}
            />
          </svg>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 text-sm">
        © 2025 Churnify. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
