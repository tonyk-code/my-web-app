import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface AddExpenseProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (goal: { name: string; target: number; color: string }) => void;
}

export default function AddExpenseModal({
  isOpen,
  onClose,
  onSubmit,
}: AddExpenseProps) {
  const [category, setCategory] = useState("others");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    /* e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    /* onSubmit({
      name: data.get("name") as string,
      target: Number(data.get("target")),
      color: data.get("color") as string,
    }); 

    form.reset();
    onClose(); */
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 h-screen w-full"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                Add New Expense
              </h3>
              <button type="button" onClick={onClose}>
                <X className="text-gray-500 hover:text-gray-800 cursor-pointer" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  name="name"
                  required
                  placeholder="Netflix subscription..."
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#b7ff03] focus:bg-white focus:shadow-[0_0_0_3px_rgba(183,255,3,0.1)] transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  name="target"
                  type="number"
                  required
                  placeholder="120"
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#b7ff03] focus:bg-white focus:shadow-[0_0_0_3px_rgba(183,255,3,0.1)] transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:border-[#b7ff03] focus:bg-white focus:shadow-[0_0_0_3px_rgba(183,255,3,0.1)] transition-all duration-300
    "
                >
                  <option value="food">Food</option>
                  <option value="housing">Housing</option>
                  <option value="transport">Transport</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="shopping">Shopping</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#102226] text-[#b7ff03] font-semibold hover:bg-[#1a3236] transition-colors"
              >
                Add expense
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
