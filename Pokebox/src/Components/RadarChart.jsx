import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ stats }) => {
  const data = {
    labels: stats.map((s) => s.stat.name),
    datasets: [
      {
        label: "Stats",
        data: stats.map((s) => s.base_stat),
        backgroundColor: "rgba(255, 75, 43, 0.2)",
        borderColor: "#ff4b2b",
        borderWidth: 2,
        pointBackgroundColor: "#ffcc00",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 150,
        grid: { color: "rgba(255,255,255,0.2)" },
        pointLabels: { color: "#fff" },
        ticks: { color: "#fff" },
      },
    },
    plugins: { legend: { labels: { color: "#fff" } } },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
