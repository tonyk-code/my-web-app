import PartnerCard from "../ui/PartnerCard";
import { motion } from "framer-motion";
import "./LandingFooter.css";

export default function LandingFooter() {
  return (
    <>
      <footer className="landing-footer">
        <div className="footer-left">
          <div className="testimonial">
            <img
              src="albert-dera.webp"
              alt="User Profile"
              className="testimonial-avatar"
              loading="lazy"
              width={40}
              height={60}
            />
            <div className="testimonial-content">
              <p className="testimonial-name">Jane Doe</p>
              <p className="testimonial-text">
                “This finance tracker helped me organize my expenses and save
                more than I ever thought possible.”
              </p>
              <div className="progress-bar">
                <motion.div
                  className="progress-filled"
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "60%",
                  }}
                  transition={{
                    duration: 2.5,
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <PartnerCard img="v914-ning-01.webp" name="FinTech Co." delay="0.5" />
          <PartnerCard img="v914-ning-011.webp" name="MoneyWise" delay="1" />
          <PartnerCard img="v914-ning-0111.webp" name="BudgetPro" delay="1.5" />
        </div>
      </footer>
    </>
  );
}
