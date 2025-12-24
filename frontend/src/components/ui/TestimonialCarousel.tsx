import { motion } from "framer-motion";
import SimpleStar from "./SimpleStar";
import { cardVariants } from "../../variants/variants";

export function TestimonialCarousel({
  name,
  comment,
  rating,
  profile,
  position,
}: {
  name: string;
  comment: string;
  rating: number;
  profile: string;
  position: "left" | "center" | "right";
}) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <motion.div
      className="testimonial-item"
      variants={cardVariants}
      initial={false}
      animate={position}
      transition={{
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      }}
    >
      <div className="testimonial-user">
        <img
          src={profile}
          loading="lazy"
          className="user-avatar"
          width={25}
          height={25}
        />
        <p className="user-name">{name}</p>
      </div>

      <div className="testimonial-rating flex">
        {stars.map((type, index) => (
          <SimpleStar key={index} type={type} size={12} color="#b7ff03" />
        ))}
      </div>

      <p className="testimonial-comment">
        <q>{comment}</q>
      </p>
    </motion.div>
  );
}
