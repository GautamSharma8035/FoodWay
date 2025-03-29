import React from "react";
import { FaSearch, FaBell, FaComment, FaGift, FaCog } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import './dashboardnav.css';

function Dashboardnav() {
    return (
        <div className="container-fluid rounded bg-light-css px-3 py-2 w-100 d-flex align-items-center justify-content-between flex-wrap gap-3">
            {/* Search Bar */}
            <div className="position-relative search-container">
                <input type="text" className="form-control pe-5" placeholder="Search here" />
                <FaSearch className="position-absolute search-icon" />
            </div>

            {/* Navbar Links - Hide on small screens */}
            <div className=" d-md-flex gap-3">
                <a href="#" className="text-decoration-none fw-bold hover-effect m-1">About</a>
                <a href="#" className="text-decoration-none fw-bold hover-effect m-1">Tools</a>
                <a href="/contact" className="text-decoration-none fw-bold hover-effect m-1">Help</a>
            </div>

            {/* Icons */}
            <div className="d-flex align-items-center gap-3">
                <div className="btn icon-container bg-light"><FaBell className="text-primary fs-5" /></div>
                <div className="btn icon-container bg-light"><FaComment className="text-primary fs-5" /></div>
                <div className="btn icon-container bg-light"><FaGift className="text-dark fs-5" /></div>
                <div className="btn icon-container bg-light position-relative">
                    <FaCog className="text-danger fs-5" />
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-circle"></Badge>
                </div>
            </div>

            {/* User Info */}
            <div className="d-flex align-items-center gap-2">
                <span className="btn-font rounded d-flex align-items-center">
                    Hello, <strong className="ms-1">Anirudh Sharma</strong>
                </span>
                <div className="rounded-circle user-image p-1 bg-light">
                    <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" className="rounded-circle w-100" />
                </div>
            </div>
        </div>
    );
}

export default Dashboardnav;
