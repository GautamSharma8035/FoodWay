import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import India from '../../images/india.jpg';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const Navigate = useNavigate();
    
      const redirectsignup = () => {
        Navigate('/signup');
      };
    return (
        <Container fluid className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5">

            <Col md={6} className="position-relative d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block d-500-none">
                <img src={India} className="w-100 img-fluid " alt="India Map" />
                <div className="position-absolute" style={{ top: "52%", left: "35%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                    <div style={{ width: "12px", height: "12px", backgroundColor: "rgb(95, 6, 190)", borderRadius: "50%", display: "inline-block" }}></div>
                    <div style={{ fontSize: "14px", fontWeight: "bold", color: "black", marginTop: "5px" }}>Indore</div>
                </div>

                <div className="position-absolute" style={{
                    top: "80%", left: "75%", transform: "translate(-50%, -50%)",
                    textAlign: "center", color: "white", fontWeight: "bold",
                    padding: "10px", borderRadius: "8px"
                }}>
                    <div style={{ width: "12px", height: "12px", backgroundColor: "rgb(95, 6, 190)", borderRadius: "50%", display: "inline-block" }}></div>
                    <p style={{ margin: 0 }} className="p-css">Currently we are here</p>
                    <p style={{ margin: 0, fontSize: "12px" }} className="p-css">(Target: All over India)</p>
                </div>
            </Col>

            <Col xs={12} md={6} className="login-page">
                <Container className="login-container p-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={8} md={6} lg={5} className="login-box ">
                            <h2 className="text-center h2-css">Welcome to FoodWay-Partner</h2>
                            <p className="text-center mb-4 p-css">Login with your credential to start selling</p>

                            <Form>
                                <div className="input-group mb-4">
                                    <span className="input-group-text">+91</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter phone number"
                                    />
                                    <button className="btn btn-outline-primary" type="button">
                                        Send OTP
                                    </button>
                                </div>

                                {/* OTP Input */}
                                <Form.Group className="mb-3">
                                    <Form.Label>OTP*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter OTP" />
                                </Form.Group>

                                {/* Login Button */}
                                <Button className="btn-purple-css w-100" type="button">Login</Button>
                                <div className="text-center mt-3">
                                    <span>Don't have an account? </span>
                                    <a href="" className="text-primary" onClick={redirectsignup}>Register</a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Container>
    );
};

export default Login;
