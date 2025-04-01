import { Box, Code, Flex, Text } from "@radix-ui/themes";
import { useLanguage } from "@component/Language/LanguageContext";
import Quote from "@component/Quote";
import { ColorSets } from "@/styles/color";
import { Building2, CalendarClock, ArrowBigRightDash } from "lucide-react";
import Highlighter from "@/components/Highlighter";
import { contentFontSizeBreakpoint, contentTitleFontSizeBreakpoint } from "..";

const ExperiencePage = () => {
  const { language } = useLanguage();

  // English version
  const experiences_en = [
    {
      title: "Cross-Platform Mobile Developer",
      company: "智器科技 Artifact",
      period: "Dec 2023 - Present",
      description: [
        "Developed cross-platform mobile apps using React Native and launched on iOS and Android.",
        "Built a responsive Line Bot web interface using React for a specialized gas industry SaaS.",
        "Collaborated closely with backend teams for rigorous testing and performance optimization.",
        "Delivered a seamless user experience across multiple platforms.",
      ],
    },
    {
      title: "Front End Intern",
      company: "精誠資訊 Systex",
      period: "2022 - 2023",
      description: [
        "Developed an interactive dashboard using Vue.",
        "Played a key role in UI/UX design to ensure visual appeal and responsiveness.",
        "Integrated dynamic data visualizations and collaborated with cross-functional teams.",
        "Continuously optimized front-end performance and refined the user experience.",
      ],
    },
  ];

  // Chinese version
  const experiences_ch = [
    {
      title: "跨平台移動開發工程師",
      company: "智器科技 Artifact",
      period: "2023年12月 - 至今",
      description: [
        "使用 React Native 開發跨平台移動應用，並成功上架至 iOS 與 Android。",
        "使用 React 開發響應式 Line Bot 網頁介面，專注於瓦斯行業的 SaaS 方案。",
        "與後端團隊密切合作，進行嚴格測試與性能優化。",
        "提供多平台間無縫的用戶體驗。",
      ],
    },
    {
      title: "前端實習生",
      company: "精誠資訊 Systex",
      period: "2022 - 2023",
      description: [
        "使用 Vue 開發互動式儀表板。",
        "參與 UI/UX 設計，確保介面視覺吸引且高度響應。",
        "整合動態數據視覺化，與跨部門團隊密切協作。",
        "持續優化前端性能並完善用戶體驗。",
      ],
    },
  ];

  const exp = language === "en" ? experiences_en : experiences_ch;
  const seeMoreText =
    language === "en" ? (
      <Text
        style={{
          color: "#888",
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        Go To{" "}
        <Highlighter backgroundColor={ColorSets.hightlightBlue}>
          My.Projects
        </Highlighter>{" "}
        to see more
      </Text>
    ) : (
      <Text
        style={{
          color: "#888",
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        {" "}
        到{" "}
        <Highlighter backgroundColor={ColorSets.hightlightBlue}>
          My.Projects
        </Highlighter>{" "}
        看更多
      </Text>
    );

  return (
    <Flex direction={{ initial: "column", md: "column" }} gap="5" p="5">
      {exp.map((exp, index) => (
        <Box key={index} style={{ marginBottom: "2rem" }}>
          <Flex justify="between" align="center">
            <Quote accentColor={ColorSets.tabGray} textColor="#000">
              <Text
                size={contentTitleFontSizeBreakpoint}
                style={{ fontWeight: "bold" }}
              >
                {exp.title}
              </Text>
            </Quote>
            {/* 期間 */}
            <Flex gap=".5em" align="center">
              <CalendarClock size={15} color={ColorSets.quoteGray} />
              <Code
                color="gray"
                style={{
                  paddingRight: "0.5rem",
                  paddingLeft: "0.5rem",
                  borderRadius: 4,
                }}
              >
                <Text size={contentFontSizeBreakpoint}>{exp.period}</Text>
              </Code>
            </Flex>
          </Flex>
          {/* 公司 */}
          <Flex gap=".5em" align="center" mt=".5rem">
            <Building2 size={15} color={ColorSets.quoteGray} />
            <Code
              color="gray"
              style={{
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem",
                borderRadius: 4,
              }}
            >
              <Text size={contentFontSizeBreakpoint}>{exp.company}</Text>
            </Code>
          </Flex>

          {/* Decriptions */}
          <Box
            style={{
              marginTop: "0.5rem",
              paddingLeft: "1rem",
              lineHeight: 1.5,
            }}
          >
            {exp.description.map((item, idx) => (
              <li key={idx}>
                <Text size={contentFontSizeBreakpoint}>{item}</Text>
              </li>
            ))}
          </Box>
        </Box>
      ))}

      {/* See More */}
      <Flex
        position="fixed"
        gap={".5em"}
        bottom={"1em"}
        right={"2.5em"}
        align="center"
      >
        {seeMoreText}
        <ArrowBigRightDash color={"#888"} size={20} />
      </Flex>
    </Flex>
  );
};

export default ExperiencePage;
