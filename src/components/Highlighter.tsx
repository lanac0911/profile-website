import React from 'react';

interface HighlighterProps {
  /**
   * 背景色（預設為亮黃色）
   */
  backgroundColor?: string;
  children: React.ReactNode;
}

const Highlighter: React.FC<HighlighterProps> = ({
  backgroundColor = '#FFEB3B',
  children,
}) => {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* 背景層 */}
      <span
        style={{
          position: 'absolute',
          left: '-0.1em',
          right: '-0.1em',
          bottom: '0.15em',
          top: '50%',
          opacity: 0.6,
          backgroundColor,
          transform: 'skew(-10deg)', // 調整斜角效果
          zIndex: -1,
          borderRadius: '0.2em',
        }}
      />
      {children}
    </span>
  );
};

export default Highlighter;
