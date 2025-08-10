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
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6 text-center">
        Customer Data Input
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition"
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white transition"
          >
            <option value="" disabled className="text-gray-400">
              Select Gender
            </option>
            <option value="male" className="text-white">
              Male
            </option>
            <option value="female" className="text-white">
              Female
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="tenure"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Tenure (months)
          </label>
          <input
            id="tenure"
            type="number"
            value={formData.tenure}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition"
            placeholder="Enter tenure in months"
          />
        </div>

        <div>
          <label
            htmlFor="monthlycharges"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Monthly Charges ($)
          </label>
          <input
            id="monthlycharges"
            type="number"
            value={formData.monthlycharges}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition"
            placeholder="Enter monthly charges"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-indigo-400 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-indigo-300 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedModel}
        >
          {selectedModel ? "Submit Prediction" : "Select a Model First"}
        </button>
      </form>
    </div>
  );
};

export default Form;
