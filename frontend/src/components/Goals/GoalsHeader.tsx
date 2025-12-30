import { Plus } from "lucide-react";

interface AddGoalButtonProps {
  onClick: () => void;
}

export default function GoalsHeader({ onClick }: AddGoalButtonProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Financial Goals</h2>
        <p className="text-gray-400">Track your savings targets</p>
      </div>

      <button
        onClick={onClick}
        className="flex h-11 text-sm gap-2 bg-[#b7ff03] justify-center items-center px-3 rounded-lg font-bold text-[#102226] cursor-pointer shadow-xs drop-shadow-[0_0_10px_rgba(183,255,3,0.5)] hover:scale-105 transition-all w-50 sm:w-fit"
      >
        <Plus size={18} /> Add Goal
      </button>
    </div>
  );
}
