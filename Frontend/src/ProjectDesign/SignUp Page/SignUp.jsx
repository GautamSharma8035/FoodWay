import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';
import { FaUserCircle, FaPhoneAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { FaGoogle, FaApple } from "react-icons/fa";
import Registration from "../../images/Registration Image.svg";
import LoginImg from "../../images/Login Image.svg";

function LoginSignUp() {
    const [change, setChange] = useState("SignUp");
    const switchChange = (change) => {
        switch (change) {
            case "Login":
                return <Login />
            case "SignUp":
                return <SignUp />
        }
    }
    return (
        <>
            <div className="d-flex justify-content-center w-100 p-3" style={{ backgroundColor: "white" }}>
                <table className="table table-bordered  border-table text-center w-50" style={{ backgroundColor: "white" }}>
                    <thead>
                        <tr>
                            <th
                                className={`tab ${change === "Login" ? "active tab bg-purple text-white" : "bg-light"}`}
                                onClick={() => setChange("Login")}
                            >
                                Login
                            </th>
                            <th
                                className={`tab ${change === "SignUp" ? " active tab bg-purple text-white" : "bg-light"}`}
                                onClick={() => setChange("SignUp")}
                            >
                                SignUp
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            {switchChange(change)}
        </>
    )
}
export { LoginSignUp }

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isModel, setIsModel] = useState("false");
    const [user, setUser] = useState({
        fullName: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const [codes, setCodes] = useState(Array(6).fill(""));

    const handleChange = (index, event) => {
        const value = event.target.value;
        if (value.length > 1) return;

        const newCodes = [...codes];
        newCodes[index] = value;
        setCodes(newCodes);


        if (value && index < 7) {
            document.getElementById(`code-${index + 1}`).focus();
        }
    };
    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
        const mobileRegex = /^[6-9]\d{9}$/;



        if (!user.fullName || !user.mobile || !user.email || !user.password || !user.confirmPassword) {
            alert("All fields are required!");
            return;
        }



    if (!mobileRegex.test(user.mobile)) {
        alert("Invalid mobile number! Please enter a 10-digit number");
        return;
    }

        if (!emailRegex.test(user.email)) {
            alert("Invalid email format! Example: example@gmail.com");
            return;
        }

        if (!passwordRegex.test(user.password)) {
            alert("Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.");
            return;
        }

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                user,
                { withCredentials: true }
            );
            alert("Registraiton Successful! Please verify Your mobile number")
            console.log("Registration successful", response.data);
            setIsModel("true");

        } catch (error) {
            console.error("Error during registration:", error);
            alert(error.response?.data?.message || "Registration failed!");
        }
    };


    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div className="container d-flex w-75 rounded align-items-stretch" >

                <div className="d-flex flex-column justify-content-center w-50 p-5 text-white border border-2 rounded"
                    style={{ backgroundColor: "white", height: "100%", backgroundColor: "rgba(81, 5, 163,0.10)" }}>
                    <div className="d-flex justify-content-center w-100">
                        <h1 className="form-label mb-5 text-dark">Registration</h1>
                    </div>
                    <form>
                        <div className="position-relative w-100 mb-3">
                            <FaUserCircle className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px",zIndex:"1" }} />
                            <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.fullName} name="fullName" onChange={handleInputChange} placeholder="Enter your full name" required />
                        </div>
                        <div className="position-relative w-100 mb-3">
                            <FaPhoneAlt className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" , zIndex:"1"}} />
                            <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.mobile} name="mobile" onChange={handleInputChange} placeholder="Enter your Mobile Number" required />
                        </div>
                        <div className="position-relative w-100 mb-3">
                            <MdEmail className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px", zIndex:"1" }} />
                            <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.email} name="email" onChange={handleInputChange} placeholder="Enter your Email Address" required />
                        </div>


                        <div className="position-relative w-100 mb-3">
                            <RiLockPasswordLine className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px", zIndex:"1" }} />
                            <input type={showPassword ? "text" : "password"} value={user.password} onChange={handleInputChange} name="password" className="form-control rounded-pill ps-5 text-dark" placeholder="Password" required />
                            <div className="position-absolute text-dark" style={{ top: "50%", left: "90%", transform: "translateY(-50%)", fontSize: "20px", cursor: "pointer" }} onClick={togglePassword}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>


                        <div className="position-relative w-100 mb-3">
                            <RiLockPasswordFill className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px", zIndex:"1" }} />
                            <input type={showConfirmPassword ? "text" : "password"} value={user.confirmPassword} onChange={handleInputChange} name="confirmPassword" className="form-control rounded-pill ps-5 text-dark" placeholder="Confirm Password" required />
                            <div className="position-absolute text-dark" style={{ top: "50%", left: "90%", transform: "translateY(-50%)", fontSize: "20px", cursor: "pointer" }} onClick={toggleConfirmPassword}>
                                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>


                        <div className="d-flex flex-column align-items-center w-100">
                            <button
                                type="button"
                                className="btn text-light w-25 mt-4"
                                style={{ backgroundColor: "rgb(81, 5, 163)" }}
                                onClick={handleSubmit}
                            >
                                Get Code
                            </button>

                            <p className="mt-3 text-dark">or</p>

                            <div className="d-flex gap-3">
                                <button className="btn btn-light border d-flex align-items-center px-3">
                                    <FaGoogle className="me-2" /> Login with Google
                                </button>
                                <button className="btn btn-light border d-flex align-items-center px-3">
                                    <FaApple className="me-2" /> Login with Apple
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="w-50 d-flex justify-content-center align-items-center border border-2 rounded ">
                    <img src={Registration}
                        className="img-fluid rounded h-100" alt="User" />
                </div>
            </div>
            {isModel === "true" && (
                <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.50)" }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content text-center" style={{
                            backgroundColor: "white",

                        }}>
                            <div className="modal-body p-5">
                                <h1 className="mb-5" style={{
                                    fontFamily: "times new roman",
                                    color: "black",
                                    fontSize: "2.5rem",
                                    textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
                                }}>
                                    Verification
                                </h1>
                                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                    {codes.map((code, index) => (
                                        <input
                                            key={index}
                                            id={`code-${index}`}
                                            type="text"
                                            value={code}
                                            onChange={(e) => handleChange(index, e)}
                                            maxLength="1"
                                            style={{
                                                width: "60px",
                                                height: "40px",
                                                textAlign: "center",
                                                fontSize: "1.5rem",
                                                fontFamily: "'Poppins', sans-serif",
                                                border: "2px solid purple",
                                                backgroundColor: "transparent",
                                                color: "black",
                                                borderRadius: "5px",
                                                outline: "none"
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button
                                    type="button"
                                    className="btn text-white"
                                    onClick={() => setIsModel(false)}
                                    style={{
                                        borderRadius: "30px",
                                        padding: "10px 20px",
                                        backgroundColor: "white",
                                        color: "#6a0572",
                                        border: "none",
                                        backgroundColor: "purple"
                                    }}
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}

export { SignUp }


function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login Successful!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };

 
  return (
    <div className="container d-flex w-75 justify-content-center mt-4">
      <div className="w-50 mt-3 rounded d-flex justify-content-center align-items-center border border-2">
        <img src={LoginImg} className="img-fluid h-75 rounded" alt="User" />
      </div>
      <div className="container-fluid mt-3 d-flex justify-content-center align-items-center border border-2 rounded w-50" style={{ backgroundColor: "rgba(81, 5, 163,0.10)" }}>
        <div className="container d-flex w-100 rounded justify-content-center">
          <div className="d-flex flex-column justify-content-center w-75 text-dark">
            <div className="d-flex justify-content-center w-100 mt-5">
              <h1 className="form-label mb-5">Login</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="position-relative w-100 mb-3">
                <MdEmail className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px", zIndex: "1" }} />
                <input type="text" className="form-control rounded-pill ps-5 text-dark" placeholder="Enter your Mobile Number" onChange={(e) => setMobile(e.target.value)} required />
              </div>

              <div className="position-relative w-100 mb-3">
                <RiLockPasswordLine className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px", zIndex: "1" }} />
                <input type="password" className="form-control rounded-pill ps-5 text-dark" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <div className="form-check mb-3 mt-4" style={{ marginLeft: "10px" }}>
                <input type="checkbox" className="form-check-input rounded-pill" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              </div>

              <div className="d-flex justify-content-center w-100">
                <button type="submit" className="btn text-light w-25 mt-4" style={{ backgroundColor: "rgb(81, 5, 163)" }}>Login</button>
              </div>

              <div className="text-center mt-3 mb-4">
                <button className="btn btn-link text-secondary text-decoration-none" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>

     </div>
  );
}

export { Login };
