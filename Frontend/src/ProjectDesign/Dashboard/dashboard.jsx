import React, { useState, useEffect, useRef } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import './dashboard.css';
import Sidenav from '../Sidenavbar/sidenav';
import Dashboardnav from '../Dashboardnav/dashboardnav';
import { Card, Button, ProgressBar } from "react-bootstrap";
import { FaUtensils, FaDollarSign, FaClipboardList, FaUsers } from "react-icons/fa";
import DoughnutChart from './DoughnutChart';
import { FaRupeeSign } from "react-icons/fa6";
import RevenueCard from './RevenueCard';
import DashboardFooter from '../Footer/Dashboardfooter';



function Dashboard() {
  const [selectButton, setSelectButton] = useState("monthly");
  const cards = [
    { icon: <FaUtensils size={30} />, value: "0", label: "Total Menus", change: "0% (30 days)", color: "primary" },
    { icon: <FaRupeeSign />, value: "0", label: "Total Revenue", change: "0% (30 days)", color: "primary" },
    { icon: <FaClipboardList />, value: "0", label: "Total Orders", change: "0% (30 days)", color: "primary" },
    { icon: <FaUsers />, value: "0", label: "Total Customers", change: "0% (30 days)", color: "primary" }
  ];
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsContainerRef = useRef(null);



  useEffect(() => {
    function handleClickOutside(event) {
      if (cardsContainerRef.current && !cardsContainerRef.current.contains(event.target)) {
        setSelectedCard(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div className='container-fluid mb-5'>
        <div className="dashboard-wrapper">
          <Sidenav
            isOpen={isSidenavOpen}
            setIsOpen={setIsSidenavOpen}
          />
          <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
            <Dashboardnav />

          </div>
          <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} mb-5`}>
            <div className='container mt-5'>
              <h3>Dashboard</h3>
              <p>Welcome, Restaurent Name</p>
            </div>
            <div className='container'>

              <div className="row g-4" ref={cardsContainerRef}>
                {cards.map((card, index) => (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-3">
                    <Card
                      className={`shadow-sm p-3 border-0 rounded-4 d-flex align-items-center flex-row card-hover ${selectedCard === index ? 'card-selected' : ''
                        }`}
                      onClick={() => handleCardClick(index)}
                      role="button"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className={`p-3 rounded-circle bg-blue-css text-${card.color} fs-3 ms-2`}>
                        {card.icon}
                      </div>
                      <div className="ms-5">
                        <h3 className="mb-0">{card.value}</h3>
                        <small className="text-muted">{card.label}</small>
                        <div className="text-success small">{card.change}</div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
                  <Card className="shadow-sm p-4 mt-4 border-0 rounded-4 order-summary-card flex-nowrap flex-column w-100">
                      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                        <h5 className="fw-bold mb-2 mb-md-0">Orders Summary</h5>
                        <div className='bg-light rounded-pill p-1'>
                          <button
                            className={`btn rounded-pill px-3 ${selectButton === "monthly" ? "btn-selected" : "btn-unselected"}`}
                            onClick={() => setSelectButton("monthly")}
                          >
                            Monthly
                          </button>
                          <button
                            className={`btn rounded-pill px-3 ${selectButton === "weekly" ? "btn-selected" : "btn-unselected"}`}
                            onClick={() => setSelectButton("weekly")}
                          >
                            Weekly
                          </button>
                          <button
                            className={`btn rounded-pill px-3 ${selectButton === "today" ? "btn-selected" : "btn-unselected"}`}
                            onClick={() => setSelectButton("today")}
                          >
                            Today
                          </button>
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between bg-light rounded-3 p-3 mb-3">
                        <div className='d-flex'>
                          <span className="badge bg-success me-2 fs-6">25</span>
                          <strong>New Orders</strong>
                        </div>
                        <Button variant="link" className="text-primary p-0 text-decoration-none">
                          Manage orders &gt;
                        </Button>
                      </div>

                      <div className="d-flex justify-content-between text-center mb-3">
                        <div>
                          <h5 className="fw-bold">25</h5>
                          <p className="text-muted">On Delivery</p>
                        </div>
                        <div>
                          <h5 className="fw-bold">60</h5>
                          <p className="text-muted">Delivered</p>
                        </div>
                        <div>
                          <h5 className="fw-bold">7</h5>
                          <p className="text-muted">Canceled</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center w-100">
                        <div className="chart-container" style={{ width: "200px", height: "200px" }}>
                          <DoughnutChart />
                        </div>

                        <div className="progress-bars w-100 mt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">On Delivery (25%)</span>
                            <span className="small">25</span>
                          </div>
                          <ProgressBar variant="danger" now={25} className="mb-2" />

                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">Delivered (60%)</span>
                            <span className="small">60</span>
                          </div>
                          <ProgressBar variant="success" now={60} className="mb-2" />

                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">Canceled (7%)</span>
                            <span className="small">7</span>
                          </div>
                          <ProgressBar variant="dark" now={7} />
                        </div>
                      </div>;
                    </Card>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 mb-4'>
                  <RevenueCard />
                </div>

              </div>
            </div>
          </div>
        </div >
      </div >
      <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} `}>
        <DashboardFooter />
      </div>


    </>
  )
}

export default Dashboard;
