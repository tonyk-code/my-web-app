import {
  House,
  TrendingDown,
  TrendingUp,
  ChartPie,
  FileText,
  Target,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavItem({
  setSideBar,
}: {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/dashboard",
      icon: House,
    },
    {
      id: 2,
      name: "Expenses",
      path: "/dashboard/expenses",
      icon: TrendingDown,
    },
    {
      id: 3,
      name: "Income",
      path: "/dashboard/income",
      icon: TrendingUp,
    },
    {
      id: 4,
      name: "Budget",
      path: "/dashboard/budget",
      icon: ChartPie,
    },
    {
      id: 5,
      name: "Goals",
      path: "/dashboard/goals",
      icon: Target,
    },
    {
      id: 6,
      name: "Reports",
      path: "/dashboard/reports",
      icon: FileText,
    },
  ];

  const handleClick = () => {
    if(window.innerWidth < 640) {
      setSideBar(false);
    }
  }
  return (
    <div className="flex flex-col gap-4 mt-7 p-5">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.id}
            to={link.path}
            end={link.path === "/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "rounded-xl px-2 py-3 flex gap-4 text-sm font-bold shadow-xl shadow-[#b7ff03]/20 text-[#102226] bg-[#b7ff03] translate-x-1"
                : "rounded-xl px-2 py-3 flex gap-4 text-sm font-bold text-white/50 hover:bg-white/10 hover:translate-x-1 hover:transition"
            }
            onClick={handleClick}
          >
            <Icon size={20} />
            <span>{link.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
