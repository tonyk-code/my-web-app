import { motion } from "framer-motion";

export default function GoalItem({
  name,
  target,
  current,
  progress,
}: {
  name: string;
  target: number;
  current: number;
  progress: number;
}) {
  return (
    <div className="grid grid-cols-4 py-4 border-b border-b-gray-100 lg:gap-[5vw] hover:bg-gray-50 hover:transition-all text-sm">
      <span className=" text-gray-600">{name}</span>
      <p className="text-gray-400">${target.toLocaleString()}</p>
      <p className="text-gray-400">${current.toLocaleString()}</p>

      <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{
            amount: 0.2,
            once: true,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-[#b7ff03]"
          style={{
            filter: "drop-shadow(0 0 8px rgba(183, 255, 3, 0.6))",
          }}
        />
      </div>
    </div>
  );
}
