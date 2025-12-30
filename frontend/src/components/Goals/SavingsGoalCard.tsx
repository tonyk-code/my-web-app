import { motion, AnimatePresence } from "framer-motion";
import { ProgressRing } from "../../components/ui/ProgressRing";
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface GoalProps {
  idx: number;
  goal: {
    name: string;
    current: number;
    target: number;
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
  const [isContributionInputOpen, setIsContributionInputOpen] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleContributionSubmit = () => {
    console.log("saved");
    setIsSuccessVisible(true);
  };

  useEffect(() => {
    if (!isSuccessVisible) return;

    const timer = setTimeout(() => {
      setIsContributionInputOpen(false);
      setIsSuccessVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSuccessVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ scale: 1.01, y: -1, transition: { delay: 0 } }}
      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 relative"
    >
      {isSuccessVisible && (
        <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl">
          <DotLottieReact
            src="https://lottie.host/e67e820d-6f6e-4edb-a83d-1baa9284bc72/8vokHieeux.lottie"
            loop={false}
            autoplay
          />
        </div>
      )}
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

      <AnimatePresence>
        {isContributionInputOpen && (
          <motion.input
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 44 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            type="number"
            placeholder="Enter amount"
            className="overflow-hidden w-full mb-3 px-4 rounded-lg border border-gray-200 text-sm text-gray-900
              focus:outline-none focus:ring-2 focus:ring-[#b7ff03]/60
              bg-white shadow-inner"
          />
        )}
      </AnimatePresence>

      <button
        onClick={
          isContributionInputOpen
            ? handleContributionSubmit
            : () => setIsContributionInputOpen(true)
        }
        className="w-full py-3 rounded-lg bg-[#102226] text-[#b7ff03] font-medium hover:bg-[#1a3236] transition-colors"
      >
        {isContributionInputOpen ? "Save Contribution" : "Add Contribution"}
      </button>
    </motion.div>
  );
}
