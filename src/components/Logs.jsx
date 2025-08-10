import React from "react";
import LogCard from "./LogCard.jsx";

const Logs = ({ apiResponse }) => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-8">
        Prediction Logs
      </h1>

      {apiResponse && apiResponse.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiResponse.map((response, index) => (
            <LogCard key={index} response={response} />
          ))}
        </div>
      ) : (
        <div className="text-center text-zinc-500 dark:text-zinc-400">
          <p className="text-lg">No predictions yet.</p>
        </div>
      )}
    </section>
  );
};

export default Logs;
