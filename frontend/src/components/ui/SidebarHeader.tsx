import AnimatedLogo from "../ui/AnimatedLogo";

export default function SidebarHeader() {
  return (
    <div className="h-20 border-b border-[#ffffff1c] flex items-center gap-5 p-5">
      <AnimatedLogo className="w-10 h-10 bg-[#b7ff03] shadow-lg shadow-[#b7ff03]/30  flex justify-center items-center rounded-xl" />

      <div>
        <p className="text-white font-bold text-lg">FinTrack</p>
        <p className="text-white/50 text-xs">Pro Dashboard</p>
      </div>
    </div>
  );
}
