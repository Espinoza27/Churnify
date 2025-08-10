import React from "react";

const LogCard = ({ response }) => {
  // Extract data from the response
  const inputData = response.input || {};
  const prediction = response.prediction || [];
  const modelUsed = response.model_used || "Unknown";

  const isChurn = prediction[0] === 1;
  const isNoChurn = prediction[0] === 0;

  return (
    <div className="bg-gray-700/30 border border-gray-600 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-3">Customer Data</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Age:</span>
              <span className="text-white font-medium">
                {inputData.age || "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Gender:</span>
              <span className="text-white font-medium">
                {inputData.gender === 0
                  ? "Male"
                  : inputData.gender === 1
                  ? "Female"
                  : "N/A"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tenure:</span>
              <span className="text-white font-medium">
                {inputData.tenure || "N/A"} months
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Monthly Cost:</span>
              <span className="text-white font-medium">
                ${inputData.monthlycharges || "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="text-right ml-4">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              isChurn
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : isNoChurn
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
            }`}
          >
            {isChurn ? (
              <>
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                Churn
              </>
            ) : isNoChurn ? (
              <>
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                No Churn
              </>
            ) : (
              "Unknown"
            )}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-600">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Model Used:</span>
          <span className="text-cyan-300 font-medium">
            {modelUsed
              .replace(/_/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
