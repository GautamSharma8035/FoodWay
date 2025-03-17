import React, { useState } from "react";
import { Table, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "../Sidenavbar/sidenav";
import Dashboardnav from "../Dashboardnav/dashboardnav";
import DashboardFooter from '../Footer/Dashboardfooter';

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

  return (
    <>    
      <div className="dashboard-wrapper">
        <Sidenav isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
          <Dashboardnav />
        </div>
        <div className='container '>
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} mt-4`}>
          <h2>Orders</h2>
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
                <tr key={index} onClick={() => handleRowClick(order)} style={{ cursor: "pointer" }} >
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>{order.location}</td>
                  <td>&#x20B9;{order.amount}</td>
                  <td>
                    <span
                      className={
                        order.status === "New Order"
                          ? "badge bg-danger"
                          : order.status === "On Delivery"
                          ? "badge bg-primary"
                          : "badge bg-success"
                      }
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <DropdownButton id={`dropdown-${index}`} title="..." variant="secondary" onClick={(e) => e.stopPropagation()}>
                      <Dropdown.Item href="#">Accept Order</Dropdown.Item>
                      <Dropdown.Item href="#">Reject Order</Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
     
    </div>
     <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} `}>
     <DashboardFooter/>
     </div>
     </>
  );
};

export default OrderPage;