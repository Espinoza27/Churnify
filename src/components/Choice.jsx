import React from "react";

const Choice = ({ setSelectedModel, selectedModel }) => {
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const models = [
    {
      id: "logistic_regression",
      name: "Logistic Regression",
      description: "Linear model for binary classification",
    },
    {
      id: "svc_model",
      name: "Support Vector Classifier",
      description: "Powerful kernel-based classification",
    },
    {
      id: "dtc_model",
      name: "Decision Tree Classifier",
      description: "Tree-based decision making model",
    },
    {
      id: "rfc_model",
      name: "Random Forest Classifier",
      description: "Ensemble of decision trees",
    },
    {
      id: "knn_model",
      name: "K-Nearest Neighbors",
      description: "Distance-based classification",
    },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6 text-center">
        Select Machine Learning Model
      </h2>

      <div className="space-y-3">
        {models.map((model) => (
          <label
            key={model.id}
            className={`block cursor-pointer transition-all duration-200 ${
              selectedModel === model.id
                ? "bg-cyan-500/20 border-cyan-400"
                : "bg-gray-700/30 border-gray-600 hover:bg-gray-700/50"
            } border rounded-lg p-4`}
          >
            <input
              type="radio"
              name="models"
              value={model.id}
              onChange={handleModelChange}
              checked={selectedModel === model.id}
              className="sr-only"
            />

            <div className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedModel === model.id
                    ? "border-cyan-400 bg-cyan-400"
                    : "border-gray-400"
                }`}
              >
                {selectedModel === model.id && (
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                )}
              </div>

              <div>
                <h3
                  className={`font-medium transition-colors ${
                    selectedModel === model.id ? "text-cyan-300" : "text-white"
                  }`}
                >
                  {model.name}
                </h3>
                <p className="text-sm text-gray-400">{model.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      {selectedModel && (
        <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-green-400 text-sm font-medium text-center">
            ✓ {models.find((m) => m.id === selectedModel)?.name} selected
          </p>
        </div>
      )}
    </div>
  );
};

export default Choice;
