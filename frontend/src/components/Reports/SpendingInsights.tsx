import { motion } from "framer-motion";
import useExpenseTotals from "../../types/useExpenseTotals";

type CategorySpending = {
  category: string;
  amount: number;
  percentage: number;
};

export default function SpendingInsights() {
  const expenseTotals = useExpenseTotals();
  const categorySpending: CategorySpending[] = [
    { category: "Housing", amount: expenseTotals.housing },
    { category: "Food", amount: expenseTotals.food },
    { category: "Transport", amount: expenseTotals.transport },
    { category: "Entertainment", amount: expenseTotals.entertainment },
    { category: "Shopping", amount: expenseTotals.shopping },
    { category: "Other", amount: expenseTotals.others },
  ].map((item) => ({
    ...item,
    percentage: expenseTotals.total
      ? Math.round((item.amount / expenseTotals.total) * 100)
      : 0,
  }));
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Spending by Category
        </h3>
        <div className="space-y-4">
          {categorySpending.map((cat, idx) => (
            <div key={cat.category}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {cat.category}
                </span>
                <span className="text-sm font-bold text-gray-900">
                  ${cat.amount.toFixed(2)}
                </span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${cat.percentage}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="h-full bg-[#b7ff03] rounded-full"
                  style={{
                    boxShadow: "0 0 8px rgba(183, 255, 3, 0.5)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Financial Insights
        </h3>
        <div className="space-y-4">
          {[
            {
              icon: "📈",
              title: "Income Growth",
              desc: "Your income increased by 44% this year compared to last year.",
            },
            {
              icon: "💰",
              title: "Savings Rate",
              desc: "You're saving 44% of your income - excellent job!",
            },
            {
              icon: "🎯",
              title: "Budget Adherence",
              desc: "You stayed within budget 83% of the time this year.",
            },
            {
              icon: "⚠️",
              title: "Top Spending",
              desc: "Housing remains your largest expense at 40% of total spending.",
            },
          ].map((insight, idx) => (
            <div
              key={idx}
              className="flex gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl">{insight.icon}</span>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600">{insight.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
