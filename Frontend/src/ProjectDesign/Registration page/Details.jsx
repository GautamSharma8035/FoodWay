import React, { useState, useEffect } from "react";
import './register.css'
import { useNavigate } from "react-router-dom";
import { Documentation, Personal, Restaurent } from "./Restaurent";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaClock, FaHome, FaRupeeSign, FaShippingFast } from "react-icons/fa";

function Details() {
    const [activeState, SetActiveState] = useState("personal");
     const Navigate = useNavigate();
        
          const redirectlogin = () => {
            Navigate('/login');
          };

    // Completed tabs track karne ke liye ek state
    const [completedTabs, setCompletedTabs] = useState({
        personal: false,
        Restaurent: false,
        Documentation: false
    });

    // useEffect(() => {
    //     localStorage.setItem("activeTab", activeState);
    // }, [activeState]);

    const handleNext = (currentTab) => {
        setCompletedTabs(prev => ({ ...prev, [currentTab]: true }));

        if (currentTab === "personal") {
            SetActiveState("Restaurent");
        } else if (currentTab === "Restaurent") {
            SetActiveState("Documentation");
        }
    };

    const renderCards = (activeState) => {
        switch (activeState) {
            case "personal":
                return <Personal SetActiveState={SetActiveState} handleNext={() => handleNext("personal")} />;
            case "Restaurent":
                return <Restaurent SetActiveState={SetActiveState} handleNext={() => handleNext("Restaurent")} />;
            case "Documentation":
                return <Documentation SetActiveState={SetActiveState} handleNext={() => handleNext("Documentation")} />;
            default:
                return <Personal />;
        }
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center gap-5 vh-100 ">
                <div className="container-fluid w-50  border-css p-4">
                    <div className="">
                        <p className="fw-bold">Already have an account?</p> <button className="btn btn-outline-primary" onClick={redirectlogin}>Login</button>
                    </div>
                    <div className="goals-section p-4 mt-5">
                        <h2 className="text-center fw-bold " style={{ color: "rgb(81, 5, 163)" }}>Our Mission</h2>
                        <p className="text-center">Delivering quality food at low prices to every home in minimum time.</p>

                        <div className="row mt-3">
                            <div className="col-md-6 goal">
                                <FaShippingFast className="goal-icon" />
                                <h5>Fast Delivery</h5>
                                <p>We ensure that food reaches your doorstep in the shortest time.</p>
                            </div>

                            <div className="col-md-6 goal">
                                <FaRupeeSign className="goal-icon" />
                                <h5>Affordable Pricing</h5>
                                <p>Best quality food at pocket-friendly prices for everyone.</p>
                            </div>

                            <div className="col-md-6 goal">
                                <FaClock className="goal-icon" />
                                <h5>24/7 Service</h5>
                                <p>Food delivery available round the clock to satisfy your hunger anytime.</p>
                            </div>

                            <div className="col-md-6 goal">
                                <FaHome className="goal-icon" />
                                <h5>Every Home, Every City</h5>
                                <p>Expanding our reach to deliver food to every home across cities.</p>
                            </div>
                        </div>
                    </div>


                </div>
                    <div className="container-fluid w-50 d-flex justify-content-center flex-column flex-nowrap media-container">
                        <div className="mx-2  container-fluid d-flex justify-content-center" style={{
                            color: "rgb(81, 5, 163)",
                            textShadow: "5px 10px white"
                        }}>
                            <h2 className="fw-bold ">Foodway-Partner</h2>
                        </div>
                        <div className="mx-5 d-flex justify-content-center flex-nowrap flex-column">
                            <div className="d-flex justify-content-center w-100 gap-3 ">
                                <div className="fw-bold position-relative">
                                    {completedTabs.personal && (
                                        <span className="tick-icon"><IoCheckmarkDoneOutline size={25} /></span>
                                    )}<br />
                                    <p
                                        className={`btn btn-rounded-none ${activeState === "personal" ? "border-hover" : "btn-unselected"}`}
                                    >
                                        Personal Details
                                    </p>

                                </div>

                                <div className="fw-bold position-relative">
                                    {completedTabs.Restaurent && (
                                        <span className="tick-icon"><IoCheckmarkDoneOutline size={25} /></span>
                                    )}<br />
                                    <p
                                        className={`btn btn-rounded-none ${activeState === "Restaurent" ? "border-hover" : "btn-unselected"}`}
                                    >
                                        Restaurant Details
                                    </p>

                                </div>

                                <div className="fw-bold position-relative">
                                    {completedTabs.Documentation && (
                                        <span className="tick-icon"><IoCheckmarkDoneOutline size={25} /></span>
                                    )}<br />
                                    <p
                                        className={`btn btn-rounded-none ${activeState === "Documentation" ? "border-hover" : "btn-unselected"}`}
                                    >
                                        Documentation
                                    </p>

                                </div>

                            </div>
                        <div className="d-flex justify-content-center gap-3 signup-container-details  ">
                                {renderCards(activeState)}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Details;
