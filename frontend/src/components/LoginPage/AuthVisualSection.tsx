import FloatingAssets from "./FloatingAssets";
import GrowthChart from "./GrowthChart";

export default function AuthVisualSection() {
  return (
    <div className="relative flex items-center justify-center py-20  md:h-screen md:w-[50%] ">
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        <FloatingAssets />
        <GrowthChart />
      </div>
    </div>
  );
}
