import {
  Utensils,
  HousePlug,
  Bus,
  Clapperboard,
  ShoppingCart,
  MoreHorizontal,
} from "lucide-react";
import type { Expense } from "../../types/Types";
import { motion } from "framer-motion";

export default function ExpenseItem({
  expense,
  i,
}: {
  expense: Expense;
  i: number;
}) {
  const { title, category, date, amount } = expense;
  const Icon =
    category === "entertainment"
      ? Clapperboard
      : category === "food"
      ? Utensils
      : category === "housing"
      ? HousePlug
      : category === "others"
      ? MoreHorizontal
      : category === "shopping"
      ? ShoppingCart
      : Bus;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.1,
        delay: i * 0.05,
      }}
      className={`flex justify-between items-center px-3 py-4 border border-white/10 rounded-xl bg-[#1f3a42] hover:bg-[#1f3a42]/80 transition-colors`}
    >
      <div className="flex items-center gap-3">
        <div className="bg-gray-400/10 p-2 rounded-lg">
          <Icon color="#99a1af" size={20} />
        </div>

        <div>
          <p className="text-white font-medium capitalize">{title}</p>
          <p className="text-gray-400 text-xs">
            {category} • <span className="opacity-70">{date}</span>
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-green-500 font-bold text-md">
          ${amount.toFixed(2).toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}
