import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Nav.css"; 
import { useNavigate } from "react-router-dom";

function Nav() {
  const Navigate=useNavigate();

  const redirect = ()=>{
    Navigate('LoginSignUp')
  }
  return (
    <>
      <div className="nav-container">
        <div className="container w-100 p-3 rounded-bottom d-flex justify-content-between nav-animation" style={{backgroundColor:"rgb(81, 5, 163)"}}>
          <h2 className="form-label container text-light shadow-css">FoodWay-Partner</h2>
          <div className="d-flex gap-5">
           
            <button type="button" className="btn btn-light" style={{color:"rgb(81, 5, 163)"}} onClick={redirect}>Login/SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
