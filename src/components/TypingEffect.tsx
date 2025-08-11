import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "@radix-ui/themes";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled.span`
  color: "white";
  display: inline-block;
  animation: ${blink} 1s step-end infinite;
`;

interface TypingEffectProps {
  text: string;
  speed?: number; // 每個字顯示的間隔（毫秒）
  delay?: number; // 打完後等待多久重播（毫秒）
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  delay = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (index < text.length) {
      // 尚未打完，遞歸增加 index
      timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else {
      // 打完後等待 delay，再重置打字效果
      timeoutId = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
    }
    return () => clearTimeout(timeoutId);
  }, [index, text, speed, delay]);

  return (
    <Text style={{ color: "#fff" }}>
      {displayedText}
      <Cursor>|</Cursor>
    </Text>
  );
};

export default TypingEffect;
