"use client";

export default function FooterBackToTop() {
  const handleBackToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      className="footer-back-to-top"
      type="button"
      onClick={handleBackToTop}
      aria-label="Voltar ao topo da página"
    >
      De volta ao topo <span aria-hidden="true">↑</span>
    </button>
  );
}
