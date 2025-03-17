import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-page">
            <Container className="login-container ">
                <Row className="justify-content-center">
                    <Col md={5} className="login-box mt-3">
                        <h2 className="text-center">Welcome to FoodWay</h2>
                        <p className="text-center mb-4">Login your account to start selling</p>

                        <Form>
                            <Form.Group className="mb-3 ">
                                <Form.Label>Phone Number*</Form.Label>
                                <div className="phone-input-group d-flex">
                                    <Form.Control type="text" value="+91" disabled className="country-code" />
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                    <button className="btn btn-outline-primary w-50" type="button">
                                Send OTP
                            </button>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>OTP*</Form.Label>
                                <Form.Control type="text" placeholder="Enter OTP" />
                            </Form.Group>

                            <button className="btn btn-purple-css w-100" type="button">
                                Login
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
