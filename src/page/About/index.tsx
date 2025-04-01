// src/pages/AboutPage.tsx
import React from "react";
import { Box, Text } from "@radix-ui/themes";
import LanguageToggle from '@component/Language/LanguageToggle';
import { useLanguage } from "@component/Language/LanguageContext";

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <Box style={{ position: "relative", padding: "1em" }}>
      {/* 右上角的語言切換按鈕 */}
      <LanguageToggle />
      <Text size="4" weight="bold">
        {language === "en" ? "About Page" : "關於我"}
      </Text>
      <Text>
        {language === "en"
          ? "This is the About page content in English."
          : "這是關於我的中文內容。"}
      </Text>
    </Box>
  );
};

export default AboutPage;
