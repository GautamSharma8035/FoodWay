import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./ProjectDesign/body/body";
import { LoginSignUp } from "./ProjectDesign/SignUp Page/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/LoginSignUp" element={<LoginSignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
