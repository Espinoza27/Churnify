import React from "react";
import "../App.css";
import Form from "../components/Form.jsx";
import Logs from "../components/Logs.jsx";
import Choice from "../components/Choice.jsx";
import SignOut from "../components/SignOut.jsx";
import { useState, useEffect, useContext } from "react";
import { supabase } from "../supabaseClient";
import { AuthContext } from "../context/AuthProvider";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const session = auth.session;
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const fetchHistoricalPredictions = async () => {
      if (session && session.user) {
        try {
          const response = await supabase
            .from("prediction_logs")
            .select("*")
            .order("created_at", { ascending: false });

          if (response.error) {
            console.error(
              "Error fetching historical predictions:",
              response.error
            );
          } else {
            console.log(response);
            console.log(response.data);

            // Transform Supabase data to match expected format
            const transformedData = (response.data || []).map((record) => ({
              input: record.input_data,
              prediction: record.prediction_result,
              model_used: record.model_used,
              success: record.success,
              message: record.message,
            }));

            setApiResponse(transformedData);
          }
        } catch (error) {
          console.error("Failed to fetch historical predictions:", error);
        }
      }
    };

    fetchHistoricalPredictions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col">
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Churnify
        </h1>
        <SignOut />
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Form
              setApiResponse={(result) =>
                setApiResponse((prev) => [...prev, result])
              }
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
            />
            <Logs apiResponse={apiResponse} />
            <Choice
              setSelectedModel={setSelectedModel}
              selectedModel={selectedModel}
            />
          </div>

          <footer className="mt-8 text-center text-gray-400">
            <p>Powered by machine learning algorithms</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
