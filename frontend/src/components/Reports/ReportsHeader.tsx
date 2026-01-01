import { Download } from "lucide-react";

export default function ReportsHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Monthly Report</h2>
        <p className="text-gray-400">Comprehensive financial analytics</p>
      </div>

      <button className="flex h-11 text-sm gap-2 bg-[#b7ff03] justify-center items-center px-3 rounded-lg font-bold text-[#102226] cursor-pointer shadow-xs drop-shadow-[0_0_10px_rgba(183,255,3,0.5)] hover:scale-105 transition-all w-50 sm:w-fit">
        <Download size={18} /> Export Report
      </button>
    </div>
  );
}
