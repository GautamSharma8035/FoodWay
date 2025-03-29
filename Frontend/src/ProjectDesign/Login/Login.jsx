import React, { useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Login = () => {
    const navigate = useNavigate();
    
    const redirectsignup = () => {
        navigate('/signup');
    };

    useEffect(() => {
       
        const map = L.map('india-map', {
            zoomControl: false, 
            dragging: false,   
            touchZoom: false,  
            scrollWheelZoom: false, 
            doubleClickZoom: false, 
            boxZoom: false,     
            tap: false,     
            attributionControl: false
        }).setView([23.5, 80.5], 10);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // Add marker for Indore
        const indoreMarker = L.marker([22.7196, 75.8577]).addTo(map);
        indoreMarker.bindPopup("<b>Indore</b>").openPopup();

        // Set exact boundaries for India to show only India
        const indiaBounds = L.latLngBounds(
            L.latLng(6.7, 68.1), 
            L.latLng(37.0, 97.4)  
        );
        map.fitBounds(indiaBounds);
      
        map.setMaxBounds(indiaBounds);

   
        return () => {
            map.remove();
        };
    }, []);

    return (
        <Container fluid className="d-flex flex-column flex-md-row align-items-center justify-content-center px-3 py-3">
          
            <Col md={5} className="position-relative d-none d-sm-block d-md-block mb-md-0 mb-4 mt-5">
                <div id="india-map" style={{ 
                    height: "600px", 
                    width: "100%", 
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}></div>
                <div className="position-absolute" style={{
                    bottom: "10px", right: "10px",
                    textAlign: "center", backgroundColor: "rgba(255,255,255,0.8)",
                    padding: "8px", borderRadius: "8px"
                }}>
               
                    
                </div>
            </Col>

        
            <Col md={1}></Col>

          
            <Col xs={12} md={5} className="login-page mt-5">
                <Container className="login-container p-4 p-md-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} lg={9} className="login-box">
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

                              
                                <Form.Group className="mb-3">
                                    <Form.Label>OTP*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter OTP" />
                                </Form.Group>

                            
                                <Button className="btn-purple-css w-100" type="button">Login</Button>
                                <div className="text-center mt-3">
                                    <span>Don't have an account? </span>
                                    <a href="#" className="text-primary" onClick={redirectsignup}>Register</a>
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