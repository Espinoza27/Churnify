import React from "react";
import LogCard from "./LogCard.jsx";

const Logs = ({ apiResponse }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6 text-center">
        Prediction History
      </h2>

      {apiResponse && apiResponse.length > 0 ? (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {apiResponse.map((response, index) => (
            <LogCard key={index} response={response} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-lg font-medium">
            No predictions yet
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Your prediction history will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default Logs;
