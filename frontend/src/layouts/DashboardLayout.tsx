
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashboardPage/Sidebar";
import Topbar from "../components/DashboardPage/Topbar";
import { useState } from "react";

export default function DashboardLayout() {
    const [sidebar , setSideBar ] = useState(false);
  return (
    <div className="relative flex h-screen bg-[#102226]">
      <Sidebar sidebar={sidebar} setSideBar={setSideBar}/>

      <div className="flex flex-col flex-1 w-screen">
        <Topbar sidebar={sidebar} setSideBar={setSideBar}/>
        <main className="p-6 overflow-y-auto">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

