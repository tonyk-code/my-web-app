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


const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dynamicLabels = Array.from({ length: 7 }, (_, i) => months[i]);
const data = {
  labels: dynamicLabels,
  datasets: [
    {
      label: "Income",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: "#3b82f6",
      borderWidth: 3,
      tension: 0.4,

      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        return gradient;
      },
    },
  ],
};

export default function IncomeLineChart() {
  return <Line data={data} />;
}
