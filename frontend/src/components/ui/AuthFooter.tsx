import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AuthFooter({ type }: { type: "login" | "signup" }) {
  return (
    <Link to={type === "login" ? "/login" : "/sign-up"}>
      <motion.p
        initial={{
          opacity: 0,
          filter: "blur(3px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="text-[#102226b6] mt-4"
      >
        {type === "login"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <button className="cursor-pointer text-black font-bold hover:text-[#b7ff03]">
          {type === "login" ? "Log in" : "Sign up"}
        </button>
      </motion.p>
    </Link>
  );
}
