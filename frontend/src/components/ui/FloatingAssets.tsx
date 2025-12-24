import { motion } from "framer-motion";
import { Wallet, DollarSign } from "lucide-react";

export default function FloatingAssets() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center gap-6"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wallet
          className="w-16 h-16 md:w-20 md:h-20"
          style={{ color: "#b7ff03" }}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <DollarSign
          className="w-12 h-12 md:w-16 md:h-16"
          style={{ color: "#b7ff03" }}
        />
      </motion.div>
    </motion.div>
  );
}
