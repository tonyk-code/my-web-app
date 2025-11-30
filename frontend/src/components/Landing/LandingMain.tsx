import { useEffect } from "react";
import { TestimonialCarousel } from "../ui/TestimonialCarousel";

import "./LandingMain.css";
import useCarousel from "../../hooks/useCarousel";

export default function LandingMain() {
  const { visible, next, prev } = useCarousel();
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      <main className="landing-main">
        <div className="main-left">
          <span className="nav-item-label">Application</span>
          <h1 className="headline">
            Personal <span className="headline-highlight">Finance </span>{" "}
            Tracking Tool
          </h1>
          <p className="description">
            Stay on top of your money with{" "}
            <span className="feature-text">automated tracking</span>,{" "}
            <span className="feature-text">insightful analytics</span>, and{" "}
            <span className="feature-text">custom financial reports</span>. Make
            smarter decisions and achieve your financial goals faster.
          </p>
          <div className="cta-button-container">
            <button className="cta-btn">
              <p>Discover</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="main-right">
          <div className="main-visual">
            <img src="phone .webp" alt="" width={850} />
          </div>

          <div className="testimonial-carousel">
            <div className="carousel-controls">
              <button className="arrow-left" onClick={prev}>
                <i className="fa-solid fa-chevron-left fa-2xs" />
              </button>
              <button className="arrow-right" onClick={next}>
                <i className="fa-solid fa-chevron-right fa-2xs" />
              </button>
            </div>

            <div className="testimonial-list">
              {visible.map((review, i) => {
                const position =
                  i === 1 ? "center" : i === 0 ? "left" : "right";
                return (
                  <TestimonialCarousel
                    key={`${review.id}-${position}`}
                    position={position}
                    name={review.name}
                    comment={review.comment}
                    profile={review.img}
                    rating={review.rating}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
