import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function InputField({
  type,
  icon,
  placeholder,
}: {
  type: "text" | "password" | "email";
  icon: "user" | "mail" | "lock";
  placeholder: string;
}) {
  return (
    <motion.div
      initial={{
        x: -20,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="relative group mt-8  w"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#102226] transition-colors duration-300">
        {icon === "user" ? (
          <User size={20} />
        ) : icon === "mail" ? (
          <Mail size={20} />
        ) : (
          <Lock size={20} />
        )}
      </div>

      <input
        type={type}
        name="fullName"
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#b7ff03] focus:bg-white focus:shadow-[0_0_0_3px_rgba(183,255,3,0.1)] transition-all duration-300"
        required
      />
    </motion.div>
  );
}
