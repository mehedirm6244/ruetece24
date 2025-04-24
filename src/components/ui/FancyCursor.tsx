import { useEffect, useState } from "react";

const FancyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touch || coarse);

    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickHandler = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const hideHandler = () => setVisible(false);
    const showHandler = () => setVisible(true);

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mousedown", clickHandler);
    window.addEventListener("mouseleave", hideHandler);
    window.addEventListener("mouseenter", showHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mousedown", clickHandler);
      window.removeEventListener("mouseleave", hideHandler);
      window.removeEventListener("mouseenter", showHandler);
    };
  }, []);

  if (!visible || isTouchDevice) {
    return null;
  }

  const size = clicked ? 12 : 16;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] bg-blue-500/40 rounded-full blur-2xl transition-all duration-50 ease-out"
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        transform: `translate(${position.x - size * 2}px, ${position.y - size * 2}px)`,
      }}
    />
  );
}

export default FancyCursor;
