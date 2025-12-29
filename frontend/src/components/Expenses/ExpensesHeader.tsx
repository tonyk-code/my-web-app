import { Plus } from "lucide-react";

export default function ExpensesHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 sm:justify-between sm:items-center">
      <div>
        <h4 className="text-white font-bold text-2xl leading-11">Expenses</h4>
        <p className="text-gray-400 text-xs font-bold">
          Track and manage your spending
        </p>
      </div>

      <button className="flex h-11 text-sm gap-2 bg-[#b7ff03] justify-center items-center px-3 rounded-lg font-bold text-[#102226] cursor-pointer shadow-xs drop-shadow-[0_0_10px_rgba(183,255,3,0.5)] hover:scale-105 transition-all w-50 sm:w-fit">
        <Plus size={18} /> Add Expense
      </button>
    </div>
  );
}
