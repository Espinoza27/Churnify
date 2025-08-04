import React from "react";

const Choice = ({ setSelectedModel }) => {
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl bg-white  shadow-md overflow-hidden space-y-6">
      <fieldset>
        <legend>Select A Machine Learning Model:</legend>

        <label>
          <input
            type="radio"
            name="models"
            value="logistic_regression"
            onChange={handleModelChange}
          />
          Logistic Regression
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="models"
            value="svc_model"
            onChange={handleModelChange}
          />
          Support Vector Classifier
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="models"
            value="dtc_model"
            onChange={handleModelChange}
          />
          Decision Tree Classifier
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="models"
            value="rfc_model"
            onChange={handleModelChange}
          />
          Random Forest Classifier
        </label>
        <br />
        <label>
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
