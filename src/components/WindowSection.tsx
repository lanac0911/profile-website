import { Box } from "@radix-ui/themes";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

interface WindowSectionProps {
  children: React.ReactNode;
  textCenter?: boolean;
  style?: React.CSSProperties;
  className?: string;
  hoverEffect?: boolean;
  hoverContent?: React.ReactNode;
  headerBgColor?: string;
  headerBorderColor?: string;
  frosted?: boolean;
}

const WindowSection: React.FC<WindowSectionProps> = ({
  children,
  textCenter = true,
  style,
  className,
  hoverEffect = false,
  hoverContent,
  headerBgColor = "#f5f5f5",
  headerBorderColor = "#f5f5f5",
  frosted = false,
}) => {
  const defaultRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>();

  // ⬇️ 自動追蹤 default-content 高度，並同步給 hover-content
  useEffect(() => {
    if (!defaultRef.current) return;
    const observer = new ResizeObserver(() => {
      setContentHeight(defaultRef.current?.offsetHeight || 0);
    });
    observer.observe(defaultRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box
        className={`window-section ${className || ""}`}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          backdropFilter: frosted ? "blur(10px)" : "none",
          backgroundColor: frosted ? "rgba(0, 0, 0, 0.1)" : "#fff",
          boxShadow: frosted ? "0 4px 30px rgba(0, 0, 0, 0.2)" : "none",
          border: frosted
            ? "1px solid rgba(0,0,0,0.4)"
            : "1px solid #ddd",
          ...style,
        }}
      >
        {/* Header */}
        <Box
          style={{
            display: "flex",
            position: "sticky",
            alignItems: "center",
            padding: "8px",
            top: 0,
            zIndex: 1,
            backgroundColor: headerBgColor,
            borderBottom: `0.5px solid ${headerBorderColor}`,
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

        {/* Content */}
        <Box
          className={`content-area ${hoverEffect ? "hover-enabled" : ""}`}
          style={{
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: textCenter ? "center" : "unset",
            justifyContent: "center",
          }}
        >
          <div className="default-content" ref={defaultRef}>
            {children}
          </div>
          {hoverEffect && (
            <div
              className="hover-content"
              style={{
                minHeight: contentHeight,
              }}
            >
              {hoverContent}
            </div>
          )}
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
            overflow: hidden;
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
