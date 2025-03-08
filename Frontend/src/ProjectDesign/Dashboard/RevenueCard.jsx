import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const RevenueCard = () => {
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
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-50 mt-4 p-4" style={{ background: "white", borderRadius: "20px", padding: "20px", boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}>
      <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <div>
          <h4 style={{ margin: 0, fontSize: "18px" }}>Revenue</h4>
          
        </div>
        <select style={{ border: "none", background: "#F5F5F5", padding: "5px 10px", borderRadius: "5px" }}>
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Today</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <div>
          <p style={{ margin: 0, fontSize: "14px", color: "#4C63FF" }}>Income</p>
          <h3 style={{ margin: 0 }}>$126,000</h3>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "14px", color: "#B43AFF" }}>Expense</p>
          <h3 style={{ margin: 0 }}>$126,000</h3>
        </div>
      </div>

      <div style={{ height: "200px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueCard;
