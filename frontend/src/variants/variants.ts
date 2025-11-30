import { type Variants } from "framer-motion";

export const cardVariants: Variants = {
  left: {
    x: "50px",
    scale: 0.5,
    filter: "blur(3px)",
    transition: { duration: 0.3 },
  },

  center: {
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3 },
  },

  right: {
    x: "-50px",
    scale: 0.5,
    filter: "blur(3px)",
    transition: { duration: 0.3 },
  },
};
