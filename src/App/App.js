import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PublickLayout from "../Layouts/PublickLayout/PublickLayout";
import { Context } from "./Context/Context";

function App() {
  const [user, setUser] = useState("SAS");

  return (
    <Context.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <PublickLayout />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
