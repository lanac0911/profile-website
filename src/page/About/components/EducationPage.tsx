import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { contentFontSizeBreakpoint, contentTitleFontSizeBreakpoint } from "..";
import { useLanguage } from "@component/Language/LanguageContext";
import { motion } from "framer-motion";
import { fadeInVariant } from "@/styles/animate";

const EducationPage = () => {
  const { language } = useLanguage();

  const badgeTheme = {
    borderRadius: ".6em",
    paddingLeft: ".5em",
    paddingRight: ".5em",
    marginRight: ".3em",
    ...contentFontSizeBreakpoint,
  };

  const educationItems_en = [
    {
      degree: "Master of Computer Science",
      institution: "NCHU",
      period: "2023 - 2025",
      specialization: [
        "AI",
        "NILM (Non-Intrusive Load Monitoring)",
        "Signal Processing",
      ],
      description: "Focus on ",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "FCU",
      period: "2018 - 2022",
      specialization: ["AIoT", "Digital Signage", "Unity"],
      description: "Studied ",
    },
  ];

  const educationItems_ch = [
    {
      degree: "資訊工程學系 碩士",
      institution: "國立中興大學",
      period: "2023 - 2025",
      specialization: ["AI", "NILM (非侵入式負載分解)", "訊號處理"],
      description: "研究領域為 ",
    },
    {
      degree: "資訊工程學系 學士",
      institution: "逢甲大學",
      period: "2018 - 2022",
      specialization: ["AIoT", "數位看板系統", "Unity"],
      description: "專題主題為 ",
    },
  ];

  const educationItems =
    language === "en" ? educationItems_en : educationItems_ch;

  return (
    <Box style={{ padding: "2rem" }}>
      <Box className="timeline">
        <motion.div
          key={language}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <ul className="timeline-list">
            {educationItems.map((item, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-content">
                  <Text
                    as="p"
                    size={contentTitleFontSizeBreakpoint}
                    style={{ fontWeight: "bold" }}
                  >
                    {item.degree}
                  </Text>
                  <Text
                    as="p"
                    size={contentFontSizeBreakpoint}
                    color="gray"
                    mb=".5em"
                  >
                    {item.institution} | {item.period}
                  </Text>

                  <Text size={contentFontSizeBreakpoint}>
                    <Text
                      as="p"
                      size={contentFontSizeBreakpoint}
                      style={{ marginTop: "0.5rem", lineHeight: 1.5 }}
                    >
                      {item.description}
                    </Text>
                  </Text>
                  <Flex wrap="wrap" gap=".3em" mt=".3em">
                    {item.specialization.map((spe, speidx) => (
                      <>
                        <Badge mx="1" color="orange" style={badgeTheme}>
                          {spe}
                        </Badge>
                        <Text>
                          {speidx !== item.specialization.length - 1
                            ? ", "
                            : ""}
                        </Text>
                      </>
                    ))}
                  </Flex>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </Box>
      <style>{`
        /* 容器設定：留出內邊距給左側時間軸 */
        .timeline {
          position: relative;
          padding-left: 30px;
        }
        /* 在容器上畫出完整垂直線 */
        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 15px; /* 這裡設定垂直線位於容器內部 15px */
          width: 2px;
          background: #0E1326;
        }
        .timeline-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
        }
        .timeline-content {
          margin-left: 20px;
        }
        /* 調整每個項目的圓點：讓圓點的中心與垂直線（15px）對齊 */
        .timeline-item::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -25px; /* 由於 li 的左邊界位於 container 的 30px 處，所以 -25px + 10px = -15px offset，
                        30 + (-15) = 15px，即圓點中心正好在 15px */
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #0E1326;
          z-index: 1;
        }
      `}</style>
    </Box>
  );
};

export default EducationPage;
