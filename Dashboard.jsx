import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const vehicles = ["1", "2", "3", "5", "7", "8", "11", "12", "15", "16", "17", "18"];
  const mpgData = [20.42, 15.64, 26.07, 17.06, 29.18, 15.67, 23.8, 20.61, 15.05, 29.47, 29.31, 29.31];
  const totalMiles = [490, 438, 704, 273, 321, 282, 180, 357, 474, 316, 1002, 762];
  const maintenanceCost = [85.2, 127.8, 0, 20, 90, 0, 0, 0, 0, 0, 0, 0];
  const tripCount = [12, 15, 17, 13, 11, 13, 5, 14, 17, 10, 13, 24];
  const totalTime = [42.5, 32.77, 55.25, 30.85, 41.43, 25.72, 11.78, 31.45, 38.32, 29.65, 56.02, 64.82];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Eficiencia de Combustible (MPG)</h2>
      <Bar data={{ labels: vehicles, datasets: [{ label: "MPG", data: mpgData }] }} />
      <h2>Distancia Total Recorrida</h2>
      <Line data={{ labels: vehicles, datasets: [{ label: "Millas", data: totalMiles }] }} />
      <h2>Número de Viajes Realizados</h2>
      <Bar data={{ labels: vehicles, datasets: [{ label: "Viajes", data: tripCount }] }} />
      <h2>Costos de Mantenimiento</h2>
      <Pie data={{ labels: vehicles, datasets: [{ label: "Costo ($)", data: maintenanceCost }] }} />
      <h2>Tiempo Total en Carretera (Horas)</h2>
      <Line data={{ labels: vehicles, datasets: [{ label: "Horas", data: totalTime }] }} />
    </div>
  );
};

export default Dashboard;