import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function GrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-end gap-2 h-24">
        {[40, 70, 45, 85, 60, 90, 75].map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              duration: 0.8,
              delay: 0.6 + index * 0.1,
              ease: "easeOut",
            }}
            className="w-6 md:w-8 rounded-t"
            style={{ backgroundColor: "#b7ff03", opacity: 0.7 }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 justify-center">
        <TrendingUp
          className="w-5 h-5 md:w-6 md:h-6"
          style={{ color: "#b7ff03" }}
        />
        <span className="text-sm md:text-base" style={{ color: "#b7ff03" }}>
          Your finances, visualized
        </span>
      </div>
    </motion.div>
  );
}
