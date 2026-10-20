import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion and touch devices
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) {
      return undefined;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return undefined;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isMouseDown = false;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const updateRing = () => {
      // Smooth linear interpolation for the outer ring
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      const scale = isMouseDown ? 0.75 : isHovering ? 1.4 : 1;
      const opacity = isHovering ? "0.9" : "0.5";

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      ring.style.opacity = opacity;

      animationFrameId = requestAnimationFrame(updateRing);
    };

    // Track interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[data-interactive]")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden" aria-hidden="true">
      {/* Center pinpoint */}
      <div
        ref={cursorDotRef}
        className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-accent-violetLight shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-opacity duration-150"
      />
      {/* Editorial outer ring */}
      <div
        ref={cursorRingRef}
        className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-accent-violet/60 transition-transform duration-75 ease-out"
      />
    </div>
  );
};

export default CustomCursor;
