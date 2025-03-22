import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const RevenueCard = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Income",
        data: [200, 400, 350, 500, 450, 700, 1000, 800, 600, 750, 900],
        borderColor: "#4C63FF",
        backgroundColor: "rgba(76, 99, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [300, 450, 300, 400, 500, 600, 850, 900, 700, 500, 650],
        borderColor: "#B43AFF",
        backgroundColor: "rgba(180, 58, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 p-3 bg-white rounded shadow-sm w-100">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Revenue</h4>
            <select
              className="form-select form-select-sm"
              style={{ maxWidth: "120px" }}
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>

          {/* Income & Expense */}
          <div className="row text-center mb-3">
            <div className="col-6">
              <p className="text-primary mb-1">Income</p>
              <h3 className="mb-0">&#8377;126,000</h3>
            </div>
            <div className="col-6">
              <p className="text-secondary mb-1">Expense</p>
              <h3 className="mb-0">&#8377;126,000</h3>
            </div>
          </div>

          {/* Chart */}
          <div className="chart-container" style={{ height: "250px" }}>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
