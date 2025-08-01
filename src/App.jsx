import "./App.css";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Logs from "./components/Logs.jsx"
import Choice from "./components/Choice.jsx"

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Customer Churn Predictions
            </h1>
            <p className="text-xl text-gray-600">
              Compare predictions across various ML models
            </p>
          </div>

          <div className = "flex">
          <Form />
          <Logs />
          <Choice />
          </div>
          

          <footer className="mt-12 text-center text-gray-500 text-sm">
            <p>Powered by machine learning algorithms</p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
