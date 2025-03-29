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
import Details from "./ProjectDesign/Registration page/Details";
import ProfilePage from "./ProjectDesign/items/govind";
import ContactUs from "./ProjectDesign/Contact us/contact";


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
        <Route path="/details" element={<Details/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
