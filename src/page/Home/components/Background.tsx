import React from "react";
import { Box } from "@radix-ui/themes";
import texture from "@img/noiseTexture.png";

const Background: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      style={{
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(-70deg, #34468C 0%, #0E1326 70%)",
        overflow: "hidden",
      }}
    >
      {/* 噪點紋理背景層 */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${texture})`,
          backgroundRepeat: "repeat",
          opacity: 0.55,
          animation: "move 3s linear infinite",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "overlay", // 使噪點與背景融合
        }}
      />

      {/* 插入子內容 */}
      {children}

      {/* 定義背景移動動畫 */}
      <style>
        {`
          @keyframes move {
            0% {
              background-position: 0 0;
              scale: 1
            }
            100% {
              background-position: 15px 15px;
              scale: 1.2

            }
          }
        `}
      </style>
    </Box>
  );
};

export default Background;
