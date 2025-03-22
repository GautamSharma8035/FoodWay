import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nav.css";

function Nav() {
  const Navigate = useNavigate();

  const redirectsignup = () => {
    Navigate('/signup');
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="nav-container">
        <div className="container-fluid p-3 rounded-bottom d-flex flex-column flex-md-row justify-content-between align-items-center nav-animation" style={{ backgroundColor: "rgb(81, 5, 163)" }}>
          {/* Brand Info */}
          <div className="text-center text-md-start mb-3 mb-md-0">
            <h2 className="text-light shadow-css mb-0">FoodWay-Partner</h2>
            <h4 className="text-light shadow-css mb-0">Restaurant</h4>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-light d-flex align-items-center gap-1"
              style={{ color: "rgb(81, 5, 163)" }}
            >
              Login <MdLogin size={20} />
            </button>
            <button
              type="button"
              className="btn btn-light d-flex align-items-center gap-2"
              style={{ color: "rgb(81, 5, 163)" }}
              onClick={redirectsignup}
            >
              Register <FaArrowTrendUp size={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;