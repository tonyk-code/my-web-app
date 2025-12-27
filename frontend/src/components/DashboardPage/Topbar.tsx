import { Bell, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Topbar({
  sidebar,
  setSideBar,
}: {
  sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-20 border-b border-[#ffffff1c] flex justify-between items-center p-5">
      <div
        onClick={() => setSideBar(!sidebar)}
        className="sm:hidden hover:bg-white/10 p-2 flex justify-center items-center transition  rounded-lg cursor-pointer"
      >
        <Menu color="white" />
      </div>

      <div className="leading-tight bg-white/10 w-40 py-2 pl-3 rounded-lg">
        <p className="text-sm font-semibold text-white">
          {time.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </p>

        <p className=" text-xs text-white/60">
          {time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </p>
      </div>

      <div className="bg-white/10 p-2 flex justify-center items-center relative rounded-lg cursor-pointer">
        <Bell size={20} color="white" />
        <span className="w-5 h-5 bg-[#b7ff03] flex justify-center items-center rounded-4xl font-bold text-xs absolute -top-1 -right-1">
          3
        </span>
      </div>
    </div>
  );
}
