import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./ProjectDesign/body/body";
import SignUp from "./ProjectDesign/SignUp Page/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
