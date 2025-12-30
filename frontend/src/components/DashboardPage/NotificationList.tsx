import { motion } from "framer-motion";

interface NotificationItemProps {
  i: number;
  title: string;
  message: string;
  type: "budget" | "goal" | "payment" | "income" | "system" | "summary";
  date: string;
  read?: boolean;
}

export default function NotificationItem({
  i,
  title,
  message,
  type,
  date,
  read = false,
}: NotificationItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 24,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0,
        delay: i * 0.06,
      }}
      className={`px-4 py-2 transition-all cursor-pointer border rounded-md 
        ${
          read ? "#b7ff03 border-[#b7ff03]/40" : " border-gray-100/20"
        }`}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-semibold text-[#fdfdfd]/90">{title}</h4>
        <span className="text-xs text-gray-500 flex items-center gap-1"><span className={`${read ? "inline-block w-1 h-1 bg-[#b7ff03] rounded-4xl drop-shadow drop-shadow-[#b7ff03]/50 " : "hidden"}`}></span>{date}</span>
      </div>

      <span className="text-xs capitalize tracking-wide text-[#a5b0b3]">
        {type}
      </span>

      <p className="text-xs text-[#9da8ac]">{message}</p>
    </motion.div>
  );
}
