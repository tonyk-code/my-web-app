import { Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarFooter() {
  return (
    <div className="absolute bottom-0 left-0 h-20 w-full border-t border-[#ffffff1c] flex justify-center items-center">
      <div className="flex items-center justify-between w-50 bg-white/10 p-2 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#b7ff03] rounded-4xl flex justify-center items-center">
            <User color="#102226" size={20} />
          </div>

          <p className="text-white/80 font-bold text-sm">Jhon Doe</p>
        </div>

        <Link to="/dashboard/settings">
          <Settings size={20} color="#ffffff80"/>
        </Link>
      </div>
    </div>
  );
}
