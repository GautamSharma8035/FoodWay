import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./ProjectDesign/body/body";
import Dashboard from "./ProjectDesign/Dashboard/dashboard";
import OrderPage from "./ProjectDesign/orderpage/order";
import OrderTracking from "./ProjectDesign/orderpage/orderTracking";
import Signup from "./ProjectDesign/Registration page/register";
import Login from "./ProjectDesign/Login/Login";
import Analytics from "./ProjectDesign/analytics/analytics";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} /> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/orderpage" element={<OrderPage/>}/>
        <Route path="/orderTracking/:id" element={<OrderTracking />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
