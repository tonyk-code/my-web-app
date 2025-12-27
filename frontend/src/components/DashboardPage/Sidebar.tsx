import { X } from "lucide-react";
import SidebarFooter from "../ui/SidebarFooter";
import SidebarHeader from "../ui/SidebarHeader";
import NavItem from "./NavItem";

export default function Sidebar({
  sidebar,
  setSideBar,
}: {
  sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {sidebar && (
        <div className="fixed w-full h-screen bg-black/10 backdrop-blur-[2px] z-5 sm:hidden transition"></div>
      )}
      <div
        className={`absolute bg-[#102226]  h-screen z-7 transition-transform ${sidebar ? "transition-discrete duration-1000" : ""} w-62.5 border-r border-[#ffffff1c] ${
          sidebar ? "translate-x-0" : "-translate-x-100"
        } sm:translate-x-0 sm:relative sm:bg-transparent sm:z-0`}
      >
        <div
          onClick={() => setSideBar(!sidebar)}
          className="sm:hidden absolute top-1 right-1 hover:bg-white/10 p-2 flex justify-center items-center transition  rounded-lg cursor-pointer"
        >
          <X color="white" size={20} />
        </div>
        <SidebarHeader />
        <NavItem setSideBar={setSideBar} />
        <SidebarFooter />
      </div>
    </>
  );
}
