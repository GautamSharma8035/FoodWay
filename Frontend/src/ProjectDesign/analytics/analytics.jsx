import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./analytic.css"; // Custom CSS for styling
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Sidenav from "../Sidenavbar/sidenav";
import Dashboardnav from "../Dashboardnav/dashboardnav";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Timeline = () => {
   const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [selectButton, setSelectButton] = useState("monthly");


  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Orders",
        data: [200, 450, 300, 500, 700, 600, 512, 800, 650, 400, 300, 257],
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
      },
    ],
  };

  return (
    <div className="dashboard-wrapper">
      <Sidenav isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
      <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
        <Dashboardnav />
      </div>
      <div className="analytics-card mt-2 ">
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} mt-4`}>
          <h5 className="analytics-title">Order Analytics</h5>
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex w-50 gap-3">
              <div className="">
                <strong className="">0</strong><br />
                <p> Total Sales</p>
              </div>
              <div className="">
                <strong className="">0</strong><br />
                <p>Avg Sales per day</p>
              </div>
            </div>
            <div className="bg-light rounded-pill text-center d-flex justify-content-center">
              <button
                className={`btn rounded-pill  ${selectButton === "monthly" ? "btn-selected" : "btn-unselected"}`}
                onClick={() => setSelectButton("monthly")}
              >
                Monthly
              </button>
              <button
                className={`btn rounded-pill  ${selectButton === "weekly" ? "btn-selected" : "btn-unselected"}`}
                onClick={() => setSelectButton("weekly")}
              >
                Weekly
              </button>
              <button
                className={`btn rounded-pill  ${selectButton === "today" ? "btn-selected" : "btn-unselected"}`}
                onClick={() => setSelectButton("today")}
              >
                Today
              </button>
            </div>
          </div>
          <Line data={chartData} />
          </div>
        </div>
      </div>
      
      );
};

      export default Timeline;
