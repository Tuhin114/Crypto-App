import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [1, 2, 34];
  const date = ["12/2/22", "23/2/25", "54/2/21"];
  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "transparent",
      },
    ],
  };

  return <Line data={data} options={{ responsive: true }} />;
};

export default Chart;