import { TrendingUp, TrendingDown, Wallet, PiggyBank } from "lucide-react";

export default function StatCard({
  title,
  value,
  trend,
  icon,
}: {
  title: string;
  value: number;
  trend: number;
  icon: "trending-up" | "trending-down" | "wallet" | "piggy-bank";
}) {
  const isPositive = trend > 0;
  const Icon =
    icon === "piggy-bank"
      ? PiggyBank
      : icon === "trending-down"
      ? TrendingDown
      : icon === "trending-up"
      ? TrendingUp
      : Wallet;

  return (
    <div className="bg-white w-full flex p-4 justify-between rounded-2xl hover:transition hover:-translate-y-1 hover:scale-105">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-gray-700">${value.toLocaleString("en-us")}</h3>
        <p className="text-xs">
          <span
            className={
              isPositive
                ? "text-green-500 font-semibold"
                : "text-red-500 font-semibold"
            }
          >
            {isPositive ? "+" : ""}
            {trend}%
          </span>
          <span className="font-semibold text-gray-400"> vs last month</span>
        </p>
      </div>

      <div className="bg-[#102226] w-12 h-12 flex justify-center items-center rounded-xl shadow-lg">
        <Icon size={24} color="#b7ff03" />
      </div>
    </div>
  );
}
