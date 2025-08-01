import React from 'react'

const Choice = () => {
  return (
    <div className = "max-w-sm mx-auto p-6 rounded-2xl bg-white  shadow-md overflow-hidden space-y-6">
    <fieldset>
  <legend>Select Machine Learning Models:</legend>

  <label>
    <input type="checkbox" name="models" value="logistic_regression" />
    Logistic Regression
  </label><br />

  <label>
    <input type="checkbox" name="models" value="svc" />
    Support Vector Classifier
  </label><br />

  <label>
    <input type="checkbox" name="models" value="dtc" />
    Decision Tree Classifier
  </label><br />

  <label>
    <input type="checkbox" name="models" value="rfc" />
    Random Forest Classifier
  </label>
</fieldset>
    </div>
  )
}

export default Choice