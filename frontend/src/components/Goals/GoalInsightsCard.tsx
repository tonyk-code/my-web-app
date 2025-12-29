import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface Goal {
  name: string;
  current: number;
  target: number;
  color: string;
}

export default function GoalInsightsCard({ goals }: { goals: Goal[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
    >
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-6 h-6 text-[#b7ff03]" />
        <h3 className="text-lg font-bold text-gray-900">Goal Insights</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-linear-to-br from-[#b7ff03]/10 to-transparent rounded-lg p-4 border border-[#b7ff03]/20">
          <p className="text-sm text-gray-700 mb-2">
            You're on track to reach your <strong>Emergency Fund</strong> goal
            in 3 months!
          </p>
        </div>
        <div className="bg-linear-to-br from-blue-500/10 to-transparent rounded-lg p-4 border border-blue-500/20">
          <p className="text-sm text-gray-700 mb-2">
            Increase your <strong>Vacation</strong> savings by $150/month to
            reach it by summer.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
