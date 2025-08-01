import React from "react";

const Logs = () => {
  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl bg-white  shadow-md overflow-hidden space-y-6">
      <h1>Logs</h1>
      <table class="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
  <thead class="bg-gray-100 text-gray-700">
    <tr>
      <th class="px-6 py-3 text-left text-sm font-semibold border-b border-gray-300">Input</th>
      <th class="px-6 py-3 text-left text-sm font-semibold border-b border-gray-300">Output</th>
    </tr>
  </thead>
  <tbody class="bg-white">
    <tr class="hover:bg-gray-50 transition-colors">
      <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-800">
        <div class="grid grid-cols-2 gap-y-1 gap-x-4">
          <span class="font-medium">Age:</span>
          <span>3</span>
          <span class="font-medium">Gender:</span>
          <span>32</span>
          <span class="font-medium">Tenure:</span>
          <span>32</span>
          <span class="font-medium">Monthly Cost:</span>
          <span>$233</span>
        </div>
      </td>
      <td class="px-6 py-4 border-b border-gray-200 text-sm text-green-700 font-medium">
        Prediction: Churn
      </td>
    </tr>
  </tbody>
</table>


    </div>
  );
};

export default Logs;
