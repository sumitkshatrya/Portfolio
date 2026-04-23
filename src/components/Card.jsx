import { useRef } from "react";
import { motion as Motion, useMotionValue, useTransform } from "framer-motion";

const Card = ({ icon, name }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 600 }}
      className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
    >
      <div className="mb-2">{icon}</div>
      <p className="text-white text-sm font-semibold">{name}</p>
    </Motion.div>
  );
};

export default Card;
