import { motion } from "framer-motion";

export default function AnimatedLogo({ className }: { className: string }) {
  const appliedClass =
    className === ""
      ? "w-15 h-15 bg-[#b7ff03] mx-auto flex justify-center items-center rounded-4xl md:mt-25"
      : className;
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
        filter: "blur(3px)",
      }}
      animate={{
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
      }}
      className={appliedClass}
    >
      <img src="Logo.webp" alt="Logo" />
    </motion.div>
  );
}
