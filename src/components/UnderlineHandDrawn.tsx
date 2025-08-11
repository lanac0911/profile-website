import React from "react";

interface UnderlineHandDrawnProps {
  color?: string;
  strokeWidth?: number;
  children: React.ReactNode;
}

const UnderlineHandDrawn: React.FC<UnderlineHandDrawnProps> = ({
  color = "#FF5E5E",
  strokeWidth = 3,
  children,
}) => {
  return (
    <>
      {"\u00A0"}
      <span style={{ position: "relative", display: "inline-block" }}>
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "0.4em",
            zIndex: 0,
          }}
        >
          <path
            d="M0,7 Q10,9 20,7 Q30,5 40,7 Q50,9 60,7 Q70,5 80,7 Q90,9 100,7"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {"\u00A0"}
    </>
  );
};

export default UnderlineHandDrawn;
