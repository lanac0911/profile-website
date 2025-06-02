import { Box, Text } from "@radix-ui/themes";
import React from "react";

interface TerminalBoxProps {
  content: Record<string, string[]>;
  style?: React.CSSProperties;
  className?: string;
}

const TerminalBox2: React.FC<TerminalBoxProps> = ({ content, style, className }) => {
  return (
    <Box
      className={className}
      style={{
        backgroundColor: "#ffffff",
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
      {Object.entries(content).map(([section, items], idx) => (
        <Box key={idx} mb="3">
          <Text as="div" weight="bold" color="gray" style={{ marginBottom: "0.5em" }}>
            ➤ {section}
          </Text>
          {items.map((item, i) => (
            <Text as="div" key={i} style={{ marginLeft: "1em" }}>
              - {item}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default TerminalBox2;
