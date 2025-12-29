import { motion } from "framer-motion";
import { ProgressRing } from "../../components/ui/ProgressRing";

interface GoalProps {
  idx: number;
  goal: {
    name: string;
    current: number;
    target: number;
    color: string;
  };
  progress: number;
  remaining: number;
}

export default function SavingsGoalCard({
  idx,
  goal,
  progress,
  remaining,
}: GoalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 , y: 0 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ scale: 1.02, y: -1, transition: {delay: 0}}}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{goal.name}</h3>

          <p className="text-sm text-gray-500">
            ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <ProgressRing
          progress={progress}
          label="Complete"
          value={`${progress.toFixed(0)}%`}
          size={140}
          strokeWidth={10}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Remaining</p>
          <p className="font-bold text-gray-900">
            ${remaining.toLocaleString()}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-500 mb-1">Monthly Target</p>
          <p className="font-bold text-gray-900">
            ${(remaining / 12).toFixed(0)}
          </p>
        </div>
      </div>

      <button className="w-full py-3 rounded-lg bg-[#102226] text-[#b7ff03] font-medium hover:bg-[#1a3236] transition-colors">
        Add Contribution
      </button>
    </motion.div>
  );
}
