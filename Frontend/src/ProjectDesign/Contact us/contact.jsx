import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaPen, FaComment } from 'react-icons/fa'; // Icons for form fields and social media

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormError(false);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } else {
      setFormError(true);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5
      }
    }
  };
  
  const primaryColor = 'rgb(81, 5, 163)';
  
  return (
    <>
      <div className="contact-page py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Header with Website Name */}
            <Row className="justify-content-center mb-5">
              <Col md={10} lg={8}>
                <motion.div variants={itemVariants}>
                  <h1 className="text-center mb-2" style={{ color: primaryColor, fontWeight: 'bold' }}>
                    Foodway-Partner
                  </h1>
                  <p className="text-center text-muted mb-5">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </motion.div>
              </Col>
            </Row>
            
            {/* Contact Info and Form Section */}
            <Row className="justify-content-center">
              <Col md={6} lg={5} className="mb-4 mb-md-0">
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body className="p-4">
                      <h4 className="mb-4" style={{ color: primaryColor }}>Get in Touch</h4>
                      
                      {/* Location */}
                      <div className="d-flex align-items-center mb-4">
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaMapMarkerAlt className="text-white" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Our Location</h6>
                          <p className="text-muted mb-0">123 FoodWay Street, Cuisine City</p>
                        </div>
                      </div>
                      
                      {/* Email */}
                      <div className="d-flex align-items-center mb-4">
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaEnvelope className="text-white" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Email Us</h6>
                          <p className="text-muted mb-0">support@foodway.com</p>
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div className="d-flex align-items-center">
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FaPhone className="text-white" />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0">Call Us</h6>
                          <p className="text-muted mb-0">+1 (123) 456-7890</p>
                        </div>
                      </div>
                      
                      {/* Social Media Links */}
                      <div className="mt-4">
                        <h6 className="mb-3" style={{ color: primaryColor }}>Follow Us</h6>
                        <div className="d-flex gap-3">
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} color={primaryColor} />
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} color={primaryColor} />
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} color={primaryColor} />
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} color={primaryColor} />
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              
              {/* Contact Form */}
              <Col md={6} lg={7}>
                <motion.div variants={itemVariants}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      {formSubmitted ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-5"
                        >
                          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                            <i className="bi bi-check-lg text-white" style={{ fontSize: '2rem' }}></i>
                          </div>
                          <h4 className="mt-4 mb-2">Thank You!</h4>
                          <p className="text-muted">Your message has been sent successfully.</p>
                        </motion.div>
                      ) : (
                        <Form onSubmit={handleSubmit}>
                          <h4 className="mb-4" style={{ color: primaryColor }}>Send Message</h4>
                          
                          {formError && (
                            <div className="alert alert-danger mb-4">
                              Please fill in all required fields.
                            </div>
                          )}
                          
                          {/* Name Field with Icon */}
                          <Form.Group className="mb-3">
                            <Form.Label>Your Name*</Form.Label>
                            <div className="input-group">
                              <span className="input-group-text bg-light border-0">
                                <FaUser color={primaryColor} />
                              </span>
                              <Form.Control 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="border-0 bg-light py-3"
                              />
                            </div>
                          </Form.Group>
                          
                          {/* Email Field with Icon */}
                          <Form.Group className="mb-3">
                            <Form.Label>Email Address*</Form.Label>
                            <div className="input-group">
                              <span className="input-group-text bg-light border-0">
                                <FaEnvelope color={primaryColor} />
                              </span>
                              <Form.Control 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="border-0 bg-light py-3"
                              />
                            </div>
                          </Form.Group>
                          
                          {/* Subject Field with Icon */}
                          <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <div className="input-group">
                              <span className="input-group-text bg-light border-0">
                                <FaPen color={primaryColor} />
                              </span>
                              <Form.Control 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter subject"
                                className="border-0 bg-light py-3"
                              />
                            </div>
                          </Form.Group>
                          
                          {/* Message Field with Icon */}
                          <Form.Group className="mb-4">
                            <Form.Label>Message*</Form.Label>
                            <div className="input-group">
                              <span className="input-group-text bg-light border-0 align-items-start pt-3">
                                <FaComment color={primaryColor} />
                              </span>
                              <Form.Control 
                                as="textarea" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                className="border-0 bg-light py-3"
                                style={{ height: '120px' }}
                              />
                            </div>
                          </Form.Group>
                          
                          {/* Submit Button */}
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Button 
                              type="submit" 
                              className="w-100 py-3"
                              style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                            >
                              Send Message
                            </Button>
                          </motion.div>
                          
                          {/* Additional Line */}
                          <div className="text-center mt-4">
                            <p className="text-muted">We value your feedback and will respond within 24 hours.</p>
                          </div>
                        </Form>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </div>
      
      {/* Full-Width Map Section */}
      <Row className="mt-5">
        <Col xs={12}>
          <motion.div 
            variants={itemVariants}
            className="map-container"
            style={{ height: '400px', overflow: 'hidden', borderRadius: '10px' }}
          >
            {/* Google Maps Embed API */}
            <iframe
              title="Aurbindo Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328661471073!2d75.8577203153386!3d22.75386433135678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a5e5b0f3a5%3A0x4a1a8b8f8b8f8b8f!2sAurbindo%20Hospital%2C%20Indore!5e0!3m2!1sen!2sin!4v1633083083083!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;