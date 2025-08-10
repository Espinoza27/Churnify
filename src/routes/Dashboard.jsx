import React from "react";
import "../App.css";
import Form from "../components/Form.jsx";
import Header from "../components/Header.jsx";
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
    <>
      <Header />
      <main className="app-main">
        <div className="container">
          <div className="header-section">
            <h1 className="main-title ">Customer Churn Predictions</h1>
            <p className="subtitle ">
              Compare predictions across various ML models
            </p>
          </div>

          <div className="content-grid ">
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

          <SignOut />
          <footer className="footer ">
            <p>Powered by machine learning algorithms</p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
