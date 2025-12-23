import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-xl border-2 border-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-4 focus:ring-accent/60 animate-glow ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Scroll to top"
      style={{ boxShadow: "0 0 24px 6px hsl(var(--primary) / 0.7), 0 0 60px 10px hsl(var(--accent) / 0.3)" }}
    >
      <span className="drop-shadow-glow">↑</span>
    </button>
  );
};

export default ScrollToTopButton;
