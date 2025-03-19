import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Nav.css"; 
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

function Nav() {
  const Navigate=useNavigate();

  const redirectsignup = ()=>{
    Navigate('/signup')
  }
  return (
    <>
      <div className="nav-container">
        <div className="container w-100 p-3 rounded-bottom d-flex justify-content-between nav-animation" style={{backgroundColor:"rgb(81, 5, 163)"}}>
          <div className="container">
          <h2 className="form-label container text-light shadow-css">FoodWay-Partner</h2>
          <h4 className="text-light container shadow-css">Restaurant</h4>
          </div>
          <div className=" d-flex gap-2 mt-5">
            <button type="button" className="btn btn-light d-flex gap-1" style={{color:"rgb(81, 5, 163)"}}>Login <MdLogin size={20} className="mt-1"/></button>
            <button type="button" className="btn btn-light d-flex gap-2" style={{color:"rgb(81, 5, 163)"}} onClick={redirectsignup}>Register <FaArrowTrendUp size={25} className=""/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
