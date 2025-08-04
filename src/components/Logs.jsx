import React from "react";
import LogCard from "./LogCard.jsx";

const Logs = ({ apiResponse }) => {
  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl bg-white  shadow-md overflow-hidden space-y-6">
      <h1>Logs</h1>

      {/* Display all API responses as LogCards */}
      {apiResponse && apiResponse.length > 0 ? (
        apiResponse.map((response, index) => (
       
          <LogCard key={index} response={response} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No predictions yet</p>
      )}
    </div>
  );
};

export default Logs;
 {/* Probably should rename this to apiResponse and pass that into logcard too */}