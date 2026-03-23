import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(
      ".scroll-hidden, .scroll-hidden-left, .scroll-hidden-right"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return ref;
}
