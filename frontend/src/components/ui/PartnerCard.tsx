import { motion } from "framer-motion";

export default function PartnerCard({
  img,
  name,
  delay,
}: {
  img: string;
  name: string;
  delay: string;
}) {
  return (
    <motion.div
      className="partner"
      initial={{
        y: "-10px",
        opacity: 0,
        filter: "blur(5px)",
      }}
      animate={{
        y: "0px",
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay: Number(delay),
        duration: 1,
      }}
    >
      <img className="partner-logo" src={img} loading="lazy" />
      <span className="partner-name">{name}</span>
    </motion.div>
  );
}
