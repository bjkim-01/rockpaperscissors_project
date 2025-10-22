// MysteryBoxIcon.jsx
import React, { useState } from "react";
import { FaBoxOpen, FaBox, FaQuestion } from "react-icons/fa";

const MysteryBoxIcon = ({ size = 80, color = "#6c63ff" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 박스 아이콘 */}
      {hovered ? (
        <FaBoxOpen size={size} color={color} />
      ) : (
        <FaBox size={size} color={color} />
      )}

      {/* 물음표 아이콘 */}
      <FaQuestion
        size={size / 2.2}
        color="gold"
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textShadow: "0 0 8px rgba(0,0,0,0.3)",
          animation: hovered ? "shake 0.6s ease infinite" : "none",
        }}
      />

      {/* CSS 애니메이션 정의 */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            25% { transform: translate(-50%, -50%) rotate(10deg); }
            50% { transform: translate(-50%, -50%) rotate(-10deg); }
            75% { transform: translate(-50%, -50%) rotate(6deg); }
            100% { transform: translate(-50%, -50%) rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

export default MysteryBoxIcon;
