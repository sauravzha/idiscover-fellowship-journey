import { useEffect, useRef, useState, useCallback } from "react";

export function useParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [speed]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return offset;
}
