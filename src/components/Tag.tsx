import React from "react";

export type TagTheme = "default" | "info" | "success" | "warning" | "error";
export type TagVariant = "solid" | "outline" | "soft";

interface TagProps {
  label: string;
  theme?: TagTheme;
  variant?: TagVariant;
  style?: React.CSSProperties;
}

const themeColors: Record<TagTheme, { bg: string; border: string; text: string }> = {
  default: { bg: "#F3F4F6", border: "#D1D5DB", text: "#374151" },   // 灰
  info:    { bg: "#DBEAFE", border: "#3B82F6", text: "#1D4ED8" },   // 藍
  success: { bg: "#DCFCE7", border: "#22C55E", text: "#15803D" },   // 綠
  warning: { bg: "#FEF9C3", border: "#EAB308", text: "#92400E" },   // 黃
  error:   { bg: "#FEE2E2", border: "#EF4444", text: "#991B1B" },   // 紅
};

const Tag: React.FC<TagProps> = ({
  label,
  theme = "default",
  variant = "solid",
  style,
}) => {
  const { bg, border, text } = themeColors[theme];

  let finalStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "0.3em 0.7em",
    fontSize: "0.875rem",
    borderRadius: "0.5em",
    fontWeight: 500,
    ...style,
  };

  switch (variant) {
    case "solid":
      finalStyle = {
        ...finalStyle,
        backgroundColor: bg,
        color: text,
        border: `1px solid ${border}`,
      };
      break;
    case "outline":
      finalStyle = {
        ...finalStyle,
        backgroundColor: "transparent",
        color: border,
        border: `1px solid ${border}`,
      };
      break;
    case "soft":
      finalStyle = {
        ...finalStyle,
        backgroundColor: bg,
        color: text,
        border: "none",
      };
      break;
  }

  return <span style={finalStyle}>{label}</span>;
};

export default Tag;