import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [color, setColor] = useState("orange");
  const onMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="container" onMouseMove={onMouseMove}>
      <div
        className="pointer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,

          backgroundColor: `${color}`,
        }}
      />
    </div>
  );
}
