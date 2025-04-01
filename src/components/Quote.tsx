import React from "react";

interface QuoteProps {
  /**
   * 左側長方形的背景顏色
   */
  accentColor?: string;
  /**
   * 引用文字的顏色
   */
  textColor?: string;
  /**
   * 字體大小，可接受任何合法的 CSS font-size 值，例如 "1rem", "16px", "1.2em" 等
   */
  size?: string;
  /**
   * 引用內容
   */
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Quote: React.FC<QuoteProps> = ({
  accentColor = "#3052f6",
  textColor = "#333",
  size = "1rem",
  style,
  children,
}) => {
  return (
    <blockquote
      style={{
        display: "flex",
        alignSelf: "flex-start",
        flexDirection: "column", // 改為垂直排列，讓換行正常運作
        borderLeft: `8px solid ${accentColor}`,
        paddingLeft: "1rem",
        margin: "1rem 0",
        color: textColor,
        fontSize: size,
        lineHeight: 1.5,
        ...style,
      }}
    >
      {children}
    </blockquote>
  );
};

export default Quote;
