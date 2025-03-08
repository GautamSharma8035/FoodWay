import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["On Delivery", "Delivered", "Canceled"],
    datasets: [
      {
        data: [15, 60, 7], 
        backgroundColor: ["#ff4d4d", "#28a745", "#343a40"], 
        hoverBackgroundColor: ["#ff6666", "#32cd32", "#555"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
