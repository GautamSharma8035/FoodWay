import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Nav.css"; 

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="container w-100 p-3 rounded-bottom d-flex justify-content-between nav-animation" style={{backgroundColor:"rgb(81, 5, 163)"}}>
          <h2 className="form-label container text-light shadow-css">FoodWay</h2>
          <div className="d-flex gap-5">
            <Link className="nav-link m-2">Menu</Link>
            <Link className="nav-link m-2">Services</Link>
            <Link className="nav-link m-2">About</Link>
            <button type="button" className="btn btn-light" style={{color:"rgb(81, 5, 163)"}}>SignUp/Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
