import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell, FaComment, FaGift, FaCog } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import './dashboardnav.css'
function Dashboardnav() {
    return (
        <>
            <div className="container-fluid rounded d-flex w-100 bg-light-css ">
                <div className="position-relative w-50 mt-3" style={{paddingLeft:"20px"}}>
                    <input
                        type="text"
                        className="form-control w-75  pe-5"
                        placeholder="Search here"
                        
                    />
                    <FaSearch className="position-absolute" style={{
                        top: '32%',
                        left: "70%",
                        transform: 'translateY(-50%)',
                        color: '#6c757d'
                    }} />
                </div>
                <div className="container m-1 d-flex justify-content-between w-100">
                    <div className="container d-flex mt-2">
                        <div className="container m-2 d-flex">
                            <a href="#" className="text-decoration-none m-2 fw-bold hover-effect">About</a>
                            <a href="#" className="text-decoration-none m-2 fw-bold hover-effect">Tools</a>
                            <a href="#" className="text-decoration-none m-2 fw-bold hover-effect">Help</a>
                        </div>

                        <div className="d-flex align-items-center gap-3 ">
                            <div className=" btn position-relative icon-container bg-light">
                                <FaBell className="text-primary fs-5" />

                            </div>

                            <div className="btn position-relative icon-container bg-light">
                                <FaComment className="text-primary fs-5" />

                            </div>

                            <div className="btn position-relative icon-container bg-light">
                                <FaGift className="text-dark fs-5" />

                            </div>

                            <div className="btn position-relative icon-container bg-light">
                                <FaCog className="text-danger fs-5" />
                                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-circle">

                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div className="ms-3 d-flex justify-content-end w-100 align-items-center">
                        <span className="btn-font rounded d-flex align-items-center">
                            Hello, <strong className="ms-1">Anirudh Sharma</strong>
                        </span>
                        <div className="rounded-circle user-image p-1 bg-light">
                        <img
                            src="https://randomuser.me/api/portraits/women/45.jpg"
                            alt="User"
                            className="rounded-circle w-100"
                        />
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}
export default Dashboardnav;


