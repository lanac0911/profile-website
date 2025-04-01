import React, { useState } from "react";
import { Box, Flex, Tabs, Text, Button } from "@radix-ui/themes";
import LanguageToggle from "@component/Language/LanguageToggle";
import { useLanguage } from "@component/Language/LanguageContext";
import { Folder, FolderOpen } from "lucide-react";
import ExperiencePage from "./components/ExperiencePage";
import MePage from "./components/MePage";
import EducationPage from "./components/EducationPage";

const tabs = [
  { en: "ME", ch: "關於我", value: "me" },
  { en: "Experience", ch: "經歷", value: "experience" },
  { en: "Education", ch: "學歷", value: "education" },
];

const TabsComponent = ({
  language,
  activeTab,
}: {
  language: string;
  activeTab: string;
}) => {
  const activeButonStyle = {
    backgroundColor: "#D9D9D9",
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
    cursor: "pointer",
  };

  const unactiveButonStyle = {
    backgroundColor: "transparent",
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 5,
    cursor: "pointer",
  };

  return (
    <Tabs.List style={{ boxShadow: "unset" }}>
      <Flex wrap="wrap">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            style={{ marginRight: "1rem" }}
          >
            <Button
              variant="soft"
              style={
                activeTab === tab.value ? activeButonStyle : unactiveButonStyle
              }
            >
              {/* 根據當前選中的值顯示不同的 icon */}
              {activeTab === tab.value ? (
                <FolderOpen
                  width="1em"
                  height="1em"
                  style={{ marginRight: 4 }}
                />
              ) : (
                <Folder width="1em" height="1em" style={{ marginRight: 4 }} />
              )}
              <Text style={{ fontWeight: 500 }}>
                {language === "en" ? tab.en : tab.ch}
              </Text>
            </Button>
          </Tabs.Trigger>
        ))}
      </Flex>
    </Tabs.List>
  );
};

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <Box style={{ position: "relative", padding: "1em" }}>
      {/* 右上角的語言切換按鈕 */}
      <LanguageToggle />

      <Flex width="100%" height="100%">
        <Tabs.Root
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          defaultValue="account"
          style={{ width: "100%", height: "100%" }}
        >
          <TabsComponent language={language} activeTab={activeTab} />
          <Box mt="1.5em" width="100%" height="100%">
            <Tabs.Content value={tabs[0].value}>
              <MePage />
            </Tabs.Content>
            <Tabs.Content value={tabs[1].value}>
              <ExperiencePage />
            </Tabs.Content>
            <Tabs.Content value={tabs[2].value}>
              <EducationPage />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Flex>
    </Box>
  );
};

export default AboutPage;
