import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2 ">
      {[
        {
          label: "Total Income",
          value: "$67,700",
          change: "+8.5%",
          trend: "up",
        },
        {
          label: "Total Expenses",
          value: "$37,700",
          change: "-2.3%",
          trend: "down",
        },
        {
          label: "Net Savings",
          value: "$30,000",
          change: "+12.5%",
          trend: "up",
        },
        {
          label: "Avg. Monthly",
          value: "$2,500",
          change: "+5.8%",
          trend: "up",
        },
      ].map((metric, idx) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className=" backdrop-blur-md   shadow-lg border border-white/20 bg-white w-full  p-4 justify-between rounded-2xl hover:transition hover:-translate-y-1 hover:scale-105"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">{metric.label}</p>
            {metric.trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-[#b7ff03]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {metric.value}
          </h3>
          <span
            className={`text-sm font-medium ${
              metric.trend === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {metric.change}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
