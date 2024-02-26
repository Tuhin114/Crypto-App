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
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    date.push(new Date(arr[i][0]));
    prices.push(arr[i][1]);
  }
  const data = {};

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={{
        labels: date,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "transparent",
          },
        ],
      }}
    />
  );
};

export default Chart;
