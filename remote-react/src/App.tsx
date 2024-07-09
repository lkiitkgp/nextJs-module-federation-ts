import React, { Suspense } from "react";
import "./App.css";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
