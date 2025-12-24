import { motion } from "framer-motion";

export default function AuthFooter() {
  return (
    <motion.p 
    initial = {{
        opacity: 0,
        filter: "blur(3px)"
    }}
    animate = {{
        opacity: 1,
        filter: "blur(0px)"
    }}

    transition={{
        duration: 1,
        delay: 0.6
    }}
    className="text-[#102226b6] mt-4">
      Don't have an account? <button className="cursor-pointer hover:text-[#b7ff03]">Sign up</button>
    </motion.p>
  );
}
