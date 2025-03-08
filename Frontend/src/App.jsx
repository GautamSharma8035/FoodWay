import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./ProjectDesign/body/body";
import Dashboard from "./ProjectDesign/Dashboard/dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/dashboard" element={<Dashboard/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
