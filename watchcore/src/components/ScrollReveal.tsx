"use client";

import { useEffect } from "react";

const revealSelector = [
  "main > section:not(.hero)",
  "main > footer",
  ".service-card",
  ".portfolio-card",
  ".step-card",
  ".faq-item",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type === "reload") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(revealSelector);
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-revealed");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((target) => {
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
