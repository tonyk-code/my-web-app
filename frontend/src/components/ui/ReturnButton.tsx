import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ReturnButton() {
  return (
    <Link to="/">
      <motion.button
        whileHover={{
          scale: 1.05,
          opacity: 1,
        }}
        className="opacity-60 fixed top-5 left-5 z-20 border-white border-2 w-8 h-8 flex justify-center items-center rounded-4xl cursor-pointer"
      >
        <ArrowLeft color="white" size={20} />
      </motion.button>
    </Link>
  );
}
