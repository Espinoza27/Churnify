import React from "react";

const Choice = ({ setSelectedModel }) => {
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
          />
          K-Nearest Neighbors Classifier
        </label>
      </fieldset>
    </div>
  );
};

export default Choice;
