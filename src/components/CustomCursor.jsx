import gsap from "gsap";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Disable custom cursor on mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) return null;

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Initial positioning
    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

    // GSAP motion trackers
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });
    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

    // Mouse move
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // Click shrink animation
    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
    };

    // Hover grow effect on links/buttons
    const handleMouseEnter = () => {
      gsap.to(cursorBorder, { scale: 1.5, duration: 0.3, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorBorder, { scale: 1, duration: 0.3, ease: "power3.out" });
    };

    // Attach listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Extra: detect interactive elements
    const interactiveEls = document.querySelectorAll("a, button, input, textarea");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      />

      {/* Cursor Border */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border-2 border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-70"
      />
    </>
  );
};

export default CustomCursor;
