import React from "react";

const Choice = ({ setSelectedModel, selectedModel }) => {
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="choice-container">
      <fieldset className="model-fieldset">
        <legend className="fieldset-legend">
          Select A Machine Learning Model:
        </legend>

        <label className="radio-label">
          <input
            type="radio"
            name="models"
            value="logistic_regression"
            onChange={handleModelChange}
            checked={selectedModel === "logistic_regression"}
            required
          />
          Logistic Regression
        </label>
        <br />

        <label className="radio-label">
          <input
            type="radio"
            name="models"
            value="svc_model"
            onChange={handleModelChange}
            checked={selectedModel === "svc_model"}
          />
          Support Vector Classifier
        </label>
        <br />

        <label className="radio-label">
          <input
            type="radio"
            name="models"
            value="dtc_model"
            onChange={handleModelChange}
            checked={selectedModel === "dtc_model"}
          />
          Decision Tree Classifier
        </label>
        <br />

        <label className="radio-label">
          <input
            type="radio"
            name="models"
            value="rfc_model"
            onChange={handleModelChange}
            checked={selectedModel === "rfc_model"}
          />
          Random Forest Classifier
        </label>
        <br />

        <label className="radio-label">
          <input
            type="radio"
            name="models"
            value="knn_model"
            onChange={handleModelChange}
            checked={selectedModel === "knn_model"}
          />
          K-Nearest Neighbors Classifier
        </label>
      </fieldset>
    </div>
  );
};

export default Choice;
