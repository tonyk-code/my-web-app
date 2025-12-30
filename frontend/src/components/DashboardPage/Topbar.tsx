import { Bell, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotificationPanel from "./NotificationPanel";
import { notifications } from "../../data/notification";

export default function Topbar({
  sidebar,
  setSideBar,
}: {
  sidebar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [time, setTime] = useState(new Date());
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadNotificationCount] = useState(() => {
    let unread: number = 0;
    notifications.map((n) => {
      if (n.read === false) {
        unread++;
      }
    });
    return unread;
  });

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

      <div
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className="z-19 bg-white/10 p-2 flex justify-center items-center relative rounded-lg cursor-pointer"
      >
        <div className="flex flex-col relative w-6 h-6 justify-center items-center">
          <AnimatePresence mode="wait">
            {isNotificationOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute"
              >
                <X size={20} color="white" />
              </motion.span>
            ) : (
              <motion.span
                key="bell"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute"
              >
                <Bell size={20} color="white" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <span className="  w-5 h-5 bg-[#b7ff03] flex justify-center items-center rounded-4xl font-bold text-xs absolute -top-1 -right-1">
          {unreadNotificationCount}
        </span>
      </div>

      {isNotificationOpen && (
        <NotificationPanel
          isNotificationOpen={isNotificationOpen}
          setIsNotificationOpen={setIsNotificationOpen}
        />
      )}
    </div>
  );
}
