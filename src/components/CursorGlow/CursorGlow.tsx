import { useEffect, useRef } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      glow.style.transform = `translate(${currentX - 130}px, ${currentY - 130}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
}

export default CursorGlow;