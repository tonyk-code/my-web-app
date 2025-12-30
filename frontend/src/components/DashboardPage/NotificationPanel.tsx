import { motion } from "framer-motion";
import NotificationItem from "./NotificationList";
import { notifications } from "../../data/notification";

interface NotificationProp {
  isNotificationOpen: boolean;
  setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function NotificationPanel({
  isNotificationOpen,
  setIsNotificationOpen,
}: NotificationProp) {
  return (
    <>
      <motion.div
        initial={{ height: 0, }}
        animate={{ height: 600,  }}
        exit={{ height: 0, width: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-[#1a3238] flex flex-col absolute top-20 right-1 z-20 rounded-xl  border border-gray-100/20  sm:right-16 sm:top-16"
      >
        <div className="border-b border-b-gray-100/20 flex justify-between items-center">
          <h2 className="text-[#fdfdfd] font-semibold py-3 px-5 ">
            Notification
          </h2>

          <div className="flex items-center gap-2 p-2">
            <button className="text-xs font-medium text-[#fdfdfd]/60 hover:text-[#fdfdfd]/80 transition-colors cursor-pointer">
              Mark all as read
            </button>

            <span className="w-px h-4 bg-[#fdfdfd]" />

            <button className="text-xs font-medium text-red-500 hover:text-red-600 transition-colors cursor-pointer">
              Clear
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4 gap-3 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
          {notifications.map((n, i) => (
            <NotificationItem
              key={n.id}
              i={i}
              title={n.title}
              message={n.message}
              type={n.type}
              date={n.date}
              read={!n.read}
            />
          ))}
        </div>
      </motion.div>

      <div
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className="absolute w-full h-screen top-0 left-0 z-18 bg-black/5 backdrop-blur-[1px] transition-all"
      ></div>
    </>
  );
}
