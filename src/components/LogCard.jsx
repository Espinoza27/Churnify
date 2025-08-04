import React from "react";

const LogCard = ({ response }) => {
  // Extract data from the response
  const inputData = response.input || {};
  const prediction = response.prediction || [];
  const modelUsed = response.model_used || "Unknown";

  return (
    <table className="min-w-full border border-gray-300 rounded-md overflow-hidden shadow-sm text-xs">
      <thead className="bg-gray-100 text-gray-600">
        <tr>
          <th className="px-3 py-2 text-left font-semibold border-b border-gray-300">
            Input
          </th>
          <th className="px-3 py-2 text-left font-semibold border-b border-gray-300">
            Output
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr className="hover:bg-gray-50 transition-colors">
          <td className="px-3 py-2 border-b border-gray-200 text-gray-800">
            <div className="grid grid-cols-2 gap-y-0.5 gap-x-2">
              <span className="font-medium">Age:</span>
              <span>{inputData.age || "N/A"}</span>
              <span className="font-medium">Gender:</span>
              <span>{inputData.gender === 0 ? "Male" : "Female"}</span>
              <span className="font-medium">Tenure:</span>
              <span>{inputData.tenure || "N/A"}</span>
              <span className="font-medium">Monthly Cost:</span>
              <span>${inputData.monthlycharges || "N/A"}</span>
            </div>
          </td>
          <td className="px-3 py-2 border-b border-gray-200 text-green-700 font-semibold">
            <div className="space-y-1">
              <div>
                {prediction[0] === 0
                  ? "No Churn"
                  : prediction[0] === 1
                  ? "Churn"
                  : "N/A"}
              </div>
              <div className="text-xs text-gray-500">Model: {modelUsed}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogCard;
