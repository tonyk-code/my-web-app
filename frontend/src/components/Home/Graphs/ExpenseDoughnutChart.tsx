import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useExpenseTotals from "../../../types/useExpenseTotals";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseDoughnutChart() {
  const doughData = useExpenseTotals();
  const options = {
    cutout: "70%", // Makes the ring thin and modern
    borderRadius: 5,
    spacing: 10,

    elements: {
      arc: {
        borderColor: "transparent", // Makes the border invisible
        borderWidth: 0, // Best practice: set width to 0 as well
      },
    },
    plugins: {
      legend: {
        display: false, // We will build our own custom legend
      },
      tooltip: {
        backgroundColor: "#102226",
        titleColor: "#b7ff03",
        bodyColor: "#fff",
        padding: 12,
        cornerRadius: 5,
        displayColors: false,
      },
    },
  };

  const data = {
    labels: [
      "Food",
      "Housing",
      "Transport",
      "Entertainment",
      "Shopping",
      "Others",
    ],
    datasets: [
      {
        label: "Amount",
        data: [
          doughData.food,
          doughData.housing,
          doughData.transport,
          doughData.entertainment,
          doughData.shopping,
          doughData.others,
        ],
        backgroundColor: [
          "#00d9ff",
          "#b7ff03",
          "#ff6b9d",
          "#ffd700",
          "#35605A",
          "#9d4edd",
        ],
        hoverOffset: 5,
      },
    ],
  };

  return (
    <>
      <div className="relative md:h-60 md:w-60 lg:h-80 lg:w-80 ">
        <Doughnut options={options} data={data} />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-30 h-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            Total
          </span>
          <span className="text-white text-3xl font-bold">
            ${doughData.total.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-y-4 gap-x-2 lg:grid-cols-3">
        {data.labels.map((label, i) => (
          <div key={label} className="flex justify-center items-center gap-2">
            <div
              style={{
                backgroundColor: data.datasets[0].backgroundColor[i],
                width: "12px",
                height: "12px",
                borderRadius: "50%",
              }}
            />
            <span className="text-gray-400 w-22  text-sm font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
