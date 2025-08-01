import React, { useState } from "react";

const Form = () => {
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

    const URL = "http://localhost:5000/api/submit";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch(URL, options);
      if (response.ok) {
        const result = await response.json();
        console.log("Backend Response: ", result);
        console.log(response.status);
        setFormData({
          age: "",
          gender: "",
          tenure: "",
          monthlycharges: "",
        });
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
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-6 rounded-2xl bg-white  shadow-md overflow-hidden space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          id="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-700 bg-gray-50"
          placeholder="Enter your age"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-gray-700 bg-gray-50 appearance-none"
        >
          <option value="" disabled className="text-gray-400">
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="tenure"
          className="block text-sm font-medium text-gray-700"
        >
          Tenure (months)
        </label>
        <input
          id="tenure"
          type="number"
          value={formData.tenure}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-700 bg-gray-50"
          placeholder="Enter tenure in months"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="monthlycharges"
          className="block text-sm font-medium text-gray-700"
        >
          Monthly Charges ($)
        </label>
        <input
          id="monthlycharges"
          type="text"
          value={formData.monthlycharges}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 text-gray-700 bg-gray-50"
          placeholder="Enter monthly charges"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit Prediction
      </button>
    </form>
  );
};

export default Form;


