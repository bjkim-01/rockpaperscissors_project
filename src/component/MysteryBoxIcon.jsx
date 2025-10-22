// MysteryBoxIcon.jsx
import React from "react";
import { FaBoxOpen, FaQuestion } from "react-icons/fa";

const MysteryBoxIcon = ({ size = 80, color = "#6c63ff" }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        transform: "translateY(0)",
      }}
    >
      {/* 열린 박스 아이콘 (항상 열려 있음) */}
      <FaBoxOpen size={size} color={color} />

      {/* 흔들리는 물음표 아이콘 */}
      <FaQuestion
        size={size / 2.2}
        color="gold"
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textShadow: "0 0 8px rgba(0,0,0,0.3)",
          animation: "shake 0.8s ease-in-out infinite",
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
