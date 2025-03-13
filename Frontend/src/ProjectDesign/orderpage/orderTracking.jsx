import React, {useState} from "react";
import { useLocation } from "react-router-dom"; // Import Router Hook
import "bootstrap/dist/css/bootstrap.min.css";
import './ordertracking.css';
import Sidenav from "../Sidenavbar/sidenav";
import Dashboardnav from "../Dashboardnav/dashboardnav";


function OrderTracking() {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const location = useLocation();
    const order = location.state?.order;

    if (!order) {
        return <h2>Order not found!</h2>;
    }

    const history = [
        { status: "Order Created", completed: true },
        { status: "Payment Success", completed: true },
        { status: "On Delivery", completed: true },
        { status: "Order Delivered", completed: false },
    ];

    return (
        <div className="dashboard-wrapper">
            <Sidenav isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
            <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
                <Dashboardnav />
            </div>
            <div className="container-fluid mt-4 order-tracking">
            <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}  row`}>
                    <div className="col-md-4">
                        <div className="profile-card">
                            <img alt="profile" className="profile-img" />
                            <h5>{order.customer}</h5>
                            <span className="badge customer-badge">Customer</span>
                            <div className="note-card">
                                <h6>Note Order</h6>
                                <p>Order ID: {order.id}</p>
                                <p>Order Date: {order.date}</p>
                            </div>
                            <div className="address-card">
                                <p>Location: {order.location}</p>
                            </div>
                        </div>
                        <div className="timeline-container mt-4">
                            <h5 className="timeline-title">Order Progress</h5>
                            <div className="progress-bar">
                                {history.map((item, index) => (
                                    <div key={index} className="progress-step">
                                        <div className={`progress-dot ${item.completed ? "completed" : "pending"}`}></div>
                                        <span className="progress-label fw-bold">{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="items-card">
                            <h6>Items</h6>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chicken curry special</td>
                                        <td>3x</td>
                                        <td>&#x20B9;14.99</td>
                                    </tr>
                                    <tr>
                                        <td>Watermelon juice</td>
                                        <td>1x</td>
                                        <td>&#x20B9;4.12</td>
                                    </tr>
                                    <tr>
                                        <td>Italiano pizza</td>
                                        <td>1x</td>
                                        <td>&#x20B9;15.44</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="delivery-status">
                            <h6>Estimated Time</h6>
                            <p>4-6 mins</p>
                        </div>
                        <div className="delivery-card">
                            <h6>Delivery by</h6>
                            <div className="d-flex">
                                <div className="container">
                                    <p>Rakesh Joshi</p>
                                </div>
                                <p>9893677588</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}

export default OrderTracking;
