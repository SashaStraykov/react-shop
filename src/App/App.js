import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout/PublicLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <PublicLayout />
      </div>
    </Router>
  );
}

export default App;
