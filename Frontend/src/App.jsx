import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './ProjectDesign/Nav/NavBar';
import Body from './ProjectDesign/body/body';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/body' element={<Body/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
