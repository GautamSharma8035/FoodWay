import React, { useState } from "react";
import './register.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaClock, FaHome, FaRupeeSign, FaShippingFast } from "react-icons/fa";

function Signup(){
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const Navigate = useNavigate();

  const redirectlogin = () => {
    Navigate('/login');
  };

    const validateForm = () => {
        let newErrors = {};
        if (!/^[6-9]\d{9}$/.test(phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!/^[0-9]{6}$/.test(otp)) {
            newErrors.otp = "Enter a valid 6-digit OTP.";
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = "/details"
        }
    };

    return (
        <>
            <div className="container-fluid d-flex gap-5 vh-100 ">
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
                <div className=" container w-50 signup-container d-flex justify-content-center align-items-center">
                    <div className="signup-card p-4">
                        <h3 className="text-center mb-3">Welcome to Foodway</h3>
                        <p className="text-center text-muted">Create your account to start selling</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <div className="input-group">
                                    <span className="input-group-text">+91</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter phone number"
                                    />
                                    <button className="btn btn-outline-primary" type="button">
                                        Send OTP
                                    </button>
                                </div>
                                {errors.phone && <div className="text-danger">{errors.phone}</div>}
                            </div>


                            <div className="mb-3">
                                <label className="form-label">OTP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                />
                                {errors.otp && <div className="text-danger">{errors.otp}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="updates" />
                                <label className="form-check-label" htmlFor="updates">
                                    I want to receive updates on Email & WhatsApp
                                </label>
                            </div>

                            <button type="submit" className="btn text-light w-100" style={{ backgroundColor: "rgb(81, 5, 163)" }}>
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;