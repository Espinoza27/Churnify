import React from "react";

const LogCard = ({ response }) => {
  // Extract data from the response
  const inputData = response.input || {};
  const prediction = response.prediction || [];
  const modelUsed = response.model_used || "Unknown";

  return (
    <table className="log-card-table">
      <thead className="table-header">
        <tr>
          <th className="header-cell">Input</th>
          <th className="header-cell">Output</th>
        </tr>
      </thead>
      <tbody className="table-body">
        <tr className="table-row">
          <td className="input-cell">
            <div className="input-grid">
              <span className="input-label">Age:</span>
              <span>{inputData.age || "N/A"}</span>
              <span className="input-label">Gender:</span>
              <span>{inputData.gender === 0 ? "Male" : "Female"}</span>
              <span className="input-label">Tenure:</span>
              <span>{inputData.tenure || "N/A"}</span>
              <span className="input-label">Monthly Cost:</span>
              <span>${inputData.monthlycharges || "N/A"}</span>
            </div>
          </td>
          <td className="output-cell">
            <div className="prediction-info">
              <div>
                {prediction[0] === 0
                  ? "No Churn"
                  : prediction[0] === 1
                  ? "Churn"
                  : "N/A"}
              </div>
              <div className="model-info">Model: {modelUsed}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LogCard;
