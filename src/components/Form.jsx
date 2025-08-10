import React, { useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../context/AuthProvider";

const Form = ({ setApiResponse, selectedModel, setSelectedModel }) => {
  const auth = useContext(AuthContext);
  const session = auth.session;
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    tenure: "",
    monthlycharges: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    console.log("Selected model:", selectedModel);

    // Check if model is selected
    if (!selectedModel) {
      alert("Please select a machine learning model before submitting.");
      return;
    }

    const URL = "http://localhost:5000/api/submit";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        model: selectedModel,
      }),
    };
    try {
      const response = await fetch(URL, options);
      if (response.ok) {
        const result = await response.json();
        console.log("Backend Response: ", result);
        console.log(response.status);

        // Pass the API response to the parent component
        setApiResponse(result);

        // Save to Supabase in background
        if (session && session.user) {
          const savePredictionToSupabase = async () => {
            try {
              await supabase.from("prediction_logs").insert({
                user_id: session.user.id,
                input_data: result.input,
                prediction_result: result.prediction,
                model_used: result.model_used,
                success: result.success,
                message: result.message,
              });
              console.log("Successfully saved to Supabase");
            } catch (error) {
              console.error("Failed to save to Supabase:", error);
            }
          };
          savePredictionToSupabase();
        }

        // Log the API Response to the server
        console.log("API Response: ", result);

        setFormData({
          age: "",
          gender: "",
          tenure: "",
          monthlycharges: "",
        });

        // Reset selected model
        setSelectedModel("");
      } else {
        console.error(
          `Error while submitting the form: ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Network Error: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          className="form-input flex"
          placeholder="Enter your age"
        />
      </div>

      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="form-select flex"
        >
          <option value="" disabled className="placeholder">
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tenure" className="form-label">
          Tenure (months)
        </label>
        <input
          id="tenure"
          type="number"
          value={formData.tenure}
          onChange={handleChange}
          required
          className="form-input flex"
          placeholder="Enter tenure in months"
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthlycharges" className="form-label">
          Monthly Charges ($)
        </label>
        <input
          id="monthlycharges"
          type="number"
          value={formData.monthlycharges}
          onChange={handleChange}
          required
          className="form-input flex"
          placeholder="Enter monthly charges"
        />
      </div>

      <button type="submit" className="submit-button">
        Submit Prediction
      </button>
    </form>
  );
};

export default Form;
