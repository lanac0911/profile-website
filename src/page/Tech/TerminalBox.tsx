import { Box, Text } from "@radix-ui/themes";
import React from "react";

interface TerminalItem {
  name: string;
  color: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; // ✅ 允許任意 icon
}

interface TerminalBoxProps {
  title: string;
  titleIcon: React.ComponentType<{
    size?: number;
    style?: React.CSSProperties;
  }>; // ✅
  list: TerminalItem[];
  style?: React.CSSProperties;
  className?: string;
}

interface Segment {
  text: React.ReactNode; // ✅ 支援字串或 JSX
  bg: string;
  color: string;
  icon?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

interface TerminalTitleBarProps {
  segments: Segment[];
}

const TerminalTitleBar: React.FC<TerminalTitleBarProps> = ({ segments }) => {
  return (
    <Box
      style={{
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        height: "24px",
        lineHeight: "24px",
      }}
    >
      {segments.map((seg, idx) => {
        const isFirst = idx === 0;
        const isSec = idx === 1;
        const isLast = idx === 2;

        return (
          <div
            key={idx}
            style={{
              position: "relative",
              zIndex: segments.length - idx,
              backgroundColor: seg.bg,
              color: seg.color,
              fontWeight: isLast ? 600 : 200,
              fontSize: "0.75rem",
              padding: "0 0.8rem",
              height: "100%",
              display: "flex",
              alignItems: "center",
              marginLeft: isFirst ? 0 : -10,
              borderRadius: isFirst ? "999px 0 0 999px" : undefined,
              clipPath: isFirst
                ? undefined
                : isSec
                ? "polygon(10px 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 10px 100%, 0% 50%)"
                : undefined,
            }}
          >
            {isSec ? <>&ensp;</> : undefined}
            {seg.icon && <seg.icon size={14} style={{ marginRight: 6 }} />}
            {seg.text}

            {/* 右凸三角 */}
            <span
              style={{
                position: "absolute",
                right: "-6px",
                top: 0,
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderLeft: `6px solid ${seg.bg}`,
              }}
            />
          </div>
        );
      })}
    </Box>
  );
};

const TerminalBox: React.FC<TerminalBoxProps> = ({
  title,
  titleIcon,
  list,
  style,
  className,
}) => {
  const segments: Segment[] = [
    { text: "➜ ~ lana", bg: "#f5e0c3", color: "#5c4033" }, // 淺奶咖
    { text: "main", icon: titleIcon, bg: "#eec0c6", color: "#792b2b" }, // 玫瑰奶茶底
    { text: <span>&ensp;{title} ％</span>, bg: "#b2dfdb", color: "#004d40" }, // 冷調薄荷藍（強調）
  ];

 
  return (
    <Box
      className={className}
      style={{
        backgroundColor: '#fcfcfc',

        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        color: "#333",
        overflowX: "auto",
        ...style,
      }}
    >
      <TerminalTitleBar segments={segments} />
      {list.map((item, i) => (
        <Box
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 6,
          }}
        >
          <Text>&ensp;- {item.name}</Text>
          <item.icon size={21} style={{ color: item.color }} />
        </Box>
      ))}
    </Box>
  );
};

export default TerminalBox;
