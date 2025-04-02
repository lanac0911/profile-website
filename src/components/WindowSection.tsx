import { Box } from "@radix-ui/themes";
import React from "react";

interface WindowSectionProps {
  children: React.ReactNode;
  textCenter?: boolean;
  style?: React.CSSProperties;
  className?: string;
  /** 是否啟用 hover 效果 */
  hoverEffect?: boolean;
  /** hover 時要顯示的內容 */
  hoverContent?: React.ReactNode;
}

const WindowSection: React.FC<WindowSectionProps> = ({
  children,
  textCenter = true,
  style,
  className,
  hoverEffect = false,
  hoverContent,
}) => {
  return (
    <>
      <Box
        className={`window-section ${className ? className : ""}`}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
          ...style,
        }}
      >
        {/* Header：保留上方三個圓點 */}
        <Box
          style={{
            display: "flex",
            position: "sticky",
            alignItems: "center",
            padding: "8px",
            top: 0,
            zIndex: 1,

            backgroundColor: "#f5f5f5",
            borderBottom: "0.5px solid #f5f5f5",
            width: "100%",
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
          className={`content-area ${hoverEffect ? "hover-enabled" : ""}`}
          style={{
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: textCenter ? "center" : "unset",
            justifyContent: "center",
            // 設定一個固定的最小高度，避免 hover 內容過少時區塊縮小
            minHeight: "6em",
          }}
        >
          <div className="default-content">{children}</div>
          {hoverEffect && <div className="hover-content">{hoverContent}</div>}
        </Box>
      </Box>

      {hoverEffect && (
        <style>{`
          .content-area.hover-enabled {
            position: relative;
            overflow: hidden;
          }
          .content-area.hover-enabled::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: #f5f5f5;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s ease-out, height 0.3s ease-out;
            z-index: 0;
            cursor: pointer;
          }
          .content-area.hover-enabled:hover::before {
            width: 200%;
            height: 200%;
          }
          .default-content {
            z-index: 1;
            transition: opacity 0.3s ease-out;
          }
          .hover-content {
            z-index: 1;
            display: none;
            transition: opacity 0.3s ease-out;
          }
          .content-area.hover-enabled:hover .default-content {
            display: none;
          }
          .content-area.hover-enabled:hover .hover-content {
            display: block;
            color: #000;
          }
        `}</style>
      )}
    </>
  );
};

export default WindowSection;
