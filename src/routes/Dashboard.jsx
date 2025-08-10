import React from "react";
import "../App.css";
import Form from "../components/Form.jsx";
import Header from "../components/Header.jsx";
import Logs from "../components/Logs.jsx";
import Choice from "../components/Choice.jsx";
import SignOut from "../components/SignOut.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");

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
            />
            <Logs apiResponse={apiResponse} />
            <Choice setSelectedModel={setSelectedModel} />
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
