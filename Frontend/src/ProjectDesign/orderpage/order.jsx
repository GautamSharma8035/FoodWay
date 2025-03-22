import React, { useState } from "react";
import { Table, Dropdown, DropdownButton, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "../Sidenavbar/sidenav";
import Dashboardnav from "../Dashboardnav/dashboardnav";
import DashboardFooter from '../Footer/Dashboardfooter';
import './order.css'; 

const orders = [
  { id: "5552351", date: "26 Feb 2025, 12:42 AM", customer: "Rahul Verma", location: "ABC", amount: "164.52", status: "New Order" },
  { id: "5552358", date: "26 Feb 2025, 01:42 PM", customer: "Mukesh Sharma", location: "9xyz", amount: "44.55", status: "On Delivery" },
  { id: "5552375", date: "26 Feb 2025, 02:12 AM", customer: "Manoj Suresh Jatav", location: "ASDF", amount: "251.16", status: "On Delivery" },
  { id: "5552356", date: "26 Feb 2025, 12:42 AM", customer: "Mina Tiwari", location: "asdfasdf", amount: "44.99", status: "New Order" },
];

const OrderPage = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const navigate = useNavigate();

  const handleRowClick = (order) => {
    navigate(`/orderTracking/${order.id}`, { state: { order } });
  };

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case "New Order":
        return "bg-danger";
      case "On Delivery":
        return "bg-primary";
      default:
        return "bg-success";
    }
  };

  return (
    <>    
      <div className="dashboard-wrapper">
        <Sidenav isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
          <Dashboardnav />
        </div>
        <div className='container'>
          <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} mt-4`}>
            <h2 className="mb-4">Orders</h2>
            
            {/* Desktop view table - will be hidden on smaller screens */}
            <div className="d-none d-lg-block table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Location</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} onClick={() => handleRowClick(order)} style={{ cursor: "pointer" }}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.customer}</td>
                      <td>{order.location}</td>
                      <td>&#x20B9;{order.amount}</td>
                      <td>
                        <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <DropdownButton 
                          id={`dropdown-${index}`} 
                          title="..." 
                          variant="secondary" 
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Dropdown.Item href="#">Accept Order</Dropdown.Item>
                          <Dropdown.Item href="#">Reject Order</Dropdown.Item>
                        </DropdownButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
            {/* Mobile/Tablet view cards - will only show on smaller screens */}
            <div className="d-lg-none">
              {orders.map((order, index) => (
                <Card 
                  key={index} 
                  className="mb-3 mobile-order-card" 
                  onClick={() => handleRowClick(order)}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="mb-0">#{order.id}</h5>
                      <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="order-details">
                      <div className="detail-row">
                        <span className="detail-label">Date:</span>
                        <span className="detail-value">{order.date}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Customer:</span>
                        <span className="detail-value">{order.customer}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Location:</span>
                        <span className="detail-value">{order.location}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Amount:</span>
                        <span className="detail-value">&#x20B9;{order.amount}</span>
                      </div>
                    </div>
                    
                    <div className="text-end mt-3">
                      <DropdownButton 
                        id={`dropdown-mobile-${index}`} 
                        title="Actions" 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Dropdown.Item href="#">Accept Order</Dropdown.Item>
                        <Dropdown.Item href="#">Reject Order</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
        <DashboardFooter/>
      </div>
    </>
  );
};

export default OrderPage;
