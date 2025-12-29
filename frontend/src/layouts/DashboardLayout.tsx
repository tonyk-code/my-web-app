import { useOutlet, useLocation } from "react-router-dom";
import Sidebar from "../components/DashboardPage/Sidebar";
import Topbar from "../components/DashboardPage/Topbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DashboardLayout() {
  const [sidebar, setSideBar] = useState(false);
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative flex h-screen bg-[#102226]">
      <Sidebar sidebar={sidebar} setSideBar={setSideBar} />

      <div className="flex flex-col flex-1 w-screen">
        <Topbar sidebar={sidebar} setSideBar={setSideBar} />
        <main className="p-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
