import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublickLayout from "../Layouts/PublickLayout/PublickLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <PublickLayout />
      </div>
    </Router>
  );
}

export default App;
