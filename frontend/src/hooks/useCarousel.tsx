import { reviews } from "../data/reviews";
import { useState, useCallback } from "react";

export default function useCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  const prevIndex = (index - 1 + reviews.length) % reviews.length;
  const nextIndex = (index + 1) % reviews.length;

  const visible = [reviews[prevIndex], reviews[index], reviews[nextIndex]];

  return { visible, next, prev };
}
