import { motion } from "framer-motion";
import {
  Line,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const yearlyData = [
  { month: "Jan", income: 4500, expenses: 2800, savings: 1700 },
  { month: "Feb", income: 4200, expenses: 3100, savings: 1100 },
  { month: "Mar", income: 5100, expenses: 2900, savings: 2200 },
  { month: "Apr", income: 4800, expenses: 3400, savings: 1400 },
  { month: "May", income: 5500, expenses: 3200, savings: 2300 },
  { month: "Jun", income: 5200, expenses: 2700, savings: 2500 },
  { month: "Jul", income: 5800, expenses: 3100, savings: 2700 },
  { month: "Aug", income: 5400, expenses: 3300, savings: 2100 },
  { month: "Sep", income: 5600, expenses: 2900, savings: 2700 },
  { month: "Oct", income: 5900, expenses: 3200, savings: 2700 },
  { month: "Nov", income: 6100, expenses: 3400, savings: 2700 },
  { month: "Dec", income: 6500, expenses: 3800, savings: 2700 },
];


export default function FinancialOverviewChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 my-4"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        2025 Financial Overview
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={yearlyData}>
          <defs>
            <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b7ff03" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#b7ff03" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="income" fill="#b7ff03" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="#ff6b9d" radius={[4, 4, 0, 0]} />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#00d9ff"
            strokeWidth={3}
            dot={{ fill: "#00d9ff", r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
