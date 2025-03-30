import { Box } from "@radix-ui/themes";
import React from "react";

interface WindowSectionProps {
  children: React.ReactNode;
  textCenter?: boolean;
  style?: React.CSSProperties;
}

const WindowSection: React.FC<WindowSectionProps> = ({
  children,
  textCenter = true,
  style,
}) => {
  return (
    <Box
      style={{
        // width: "60%",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid #ddd",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        ...style,
      }}
    >
      {/* Header */}
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          backgroundColor: "#f5f5f5",
          borderBottom: "0.5px solid #f5f5f5",
          width: "100%", // header 填滿 100%
        }}
      >
        <Box
          style={{
            display: "flex",
            gap: "5px",
            margin: "0 5px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#FF5F57",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#FFBD2E",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#28C940",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </Box>
      </Box>

      {/* 內容區塊 */}
      <Box
        style={{
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: textCenter ? "center" : "unset",
          justifyContent: "center",
          // width: "100%", // 若需要，可確保內容區也填滿寬度
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default WindowSection;
