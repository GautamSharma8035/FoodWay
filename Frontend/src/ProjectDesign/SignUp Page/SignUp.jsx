import React, { useState } from "react";
import './SignUp.css';
import { FaUserCircle, FaPhoneAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isModel,setIsModel] = useState("false");
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
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!user.fullName || !user.mobile || !user.email || !user.password || !user.confirmPassword) {
        alert("All fields are required!");
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
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "black" }}>
            <div className="container d-flex w-75 p-5 rounded " >
                <div className="d-flex flex-column justify-content-center w-50 p-5 text-white" style={{ backgroundColor: "black" }}>
                    <div className="d-flex justify-content-center w-100">
                        <h1 className="form-label mb-5">Registration</h1>
                    </div>
                    <form >
                    <div className="position-relative w-100 mb-3">
                        <FaUserCircle className="position-absolute text-secondary" style={{ top: "50%", left: "10px",  transform: "translateY(-50%)", fontSize: "20px" }} />
                        <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.fullName} name="fullName"onChange={handleInputChange} placeholder="Enter your full name" required />
                    </div>
                    <div className="position-relative w-100 mb-3">
                        <FaPhoneAlt className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" }} />
                        <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.mobile} name="mobile" onChange={handleInputChange} placeholder="Enter your Mobile Number" required />
                    </div>
                    <div className="position-relative w-100 mb-3">
                        <MdEmail className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" }} />
                        <input type="text" className="form-control rounded-pill ps-5  text-dark" value={user.email} name="email"onChange={handleInputChange} placeholder="Enter your Email Address" required />
                    </div>

                 
                    <div className="position-relative w-100 mb-3">
                        <RiLockPasswordLine className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" }} />
                        <input type={showPassword ? "text" : "password"} value={user.password} onChange={handleInputChange} name="password" className="form-control rounded-pill ps-5 text-dark" placeholder="Password" required />
                        <div className="position-absolute text-dark"  style={{ top: "50%", left: "90%", transform: "translateY(-50%)", fontSize: "20px", cursor: "pointer" }} onClick={togglePassword}>
                            {showPassword ?  <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>

                 
                    <div className="position-relative w-100 mb-3">
                        <RiLockPasswordFill className="position-absolute text-secondary" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" }} />
                        <input type={showConfirmPassword ? "text" : "password"} value={user.confirmPassword} onChange={handleInputChange} name="confirmPassword" className="form-control rounded-pill ps-5 text-dark" placeholder="Confirm Password" required />
                        <div className="position-absolute text-dark"  style={{ top: "50%", left: "90%", transform: "translateY(-50%)", fontSize: "20px", cursor: "pointer" }} onClick={toggleConfirmPassword}>
                            {showConfirmPassword ?  <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center w-100">
                        <button type="button" className="btn text-light w-25 mt-4" style={{ backgroundColor: "rgba(128, 0, 128, 1)" }} onClick={handleSubmit} >Get Code</button>
                    </div>
                    </form>
                </div>
                

                <div className="w-50 d-flex justify-content-center align-items-center">
                    <img src="https://files.oaiusercontent.com/file-FbWadmuttTuoA3sMQPjSg4?se=2025-02-16T11%3A25%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D621363d1-9727-4b4a-a87d-73db64627a2f.webp&sig=LScCcY7FsXlh0oKrXYuAHLUIwF7VHFLfgqTxzr5sM%2BY%3D" 
                         className="img-fluid rounded" 
                         alt="User" />
                </div>
            </div>
            {isModel === "true" && (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.50)" }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center" style={{
                backgroundColor:"white",
                
            }}>
                <div className="modal-body p-5">
                    <h1  className="mb-5"style={{
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
                            color:  "#6a0572" ,
                            border: "none",
                            backgroundColor:"purple"
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

export default SignUp;
