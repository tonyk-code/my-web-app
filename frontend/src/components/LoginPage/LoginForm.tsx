import InputField from "../ui/InputField";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AuthFooter from "../ui/AuthFooter";
import AnimatedLogo from "../ui/AnimatedLogo";

export default function LoginForm() {
  return (
    <div className="py-5 px-20 flex flex-col text-center rounded-tl-4xl rounded-tr-4xl bg-white md:rounded-tr-none md:rounded-tl-[60px] md:rounded-bl-[60px] md:h-screen md:w-[50%] ">
      <AnimatedLogo />

      <h2 className="my-2 text-[#102226] font-medium text-2xl">Welcome Back</h2>
      <p className="text-[#102226b6]">Track your finances with clarity</p>
      <form action="">
        <InputField type="text" icon="user" placeholder="your@email.com" />
        <InputField
          type="password"
          icon="lock"
          placeholder="Enter your password"
        />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.6,
            delay: 1.3,
          }}
          type="submit"
          className="mt-8 w-full font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
          style={{ backgroundColor: "#b7ff03", color: "#102226" }}
        >
          <span>Login</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </form>

      <AuthFooter type="signup" />
    </div>
  );
}
