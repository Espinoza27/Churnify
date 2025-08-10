import React from "react";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";

// remove this later
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <SignIn />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
