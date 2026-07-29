import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 260, mass: 0.3 });
  const ringY = useSpring(y, { damping: 28, stiffness: 260, mass: 0.3 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const enter = (event) => {
      if (event.target.closest("a, button, [data-magnetic]")) {
        setHovered(true);
      }
    };

    const leave = (event) => {
      if (event.target.closest("a, button, [data-magnetic]")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="cursor-ring hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={hovered ? { scale: 1.7 } : { scale: 1 }}
        transition={{ duration: 0.22 }}
      />
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ x, y }}
        animate={hovered ? { scale: 1.7 } : { scale: 1 }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}

export default CustomCursor;
