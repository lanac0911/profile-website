import { Flex, Text, Box } from "@radix-ui/themes";
import myPhoto from "@img/myphoto.png";
import { useLanguage } from "@component/Language/LanguageContext";
import {
  Dog,
  PawPrint,
  BrainCircuit,
  MonitorCheck,
  Binary,
} from "lucide-react";
import Highlighter from "@component/Highlighter";
import { ColorSets } from "@/styles/color";
import { contentFontSizeBreakpoint } from "..";

const MePage = () => {
  const { language } = useLanguage();

  const FirstParagraph_en = () => (
    <>
      <Text as="p" size={contentFontSizeBreakpoint}>
        Hi! I'm <Highlighter backgroundColor="#97999A"> Lana Chang</Highlighter>{" "}
        from Taiwan, passionate and curious about{" "}
        <Highlighter backgroundColor={ColorSets.hightlightBlue}>
          {" "}
          IoT{" "}
        </Highlighter>{" "}
        <MonitorCheck size={15} style={{ marginRight: ".3em" }} />,
        <Highlighter backgroundColor={ColorSets.hightlightBlue}>
          software{" "}
        </Highlighter>{" "}
        <Binary size={15} style={{ marginRight: ".3em" }} />
        and{" "}
        <Highlighter backgroundColor={ColorSets.hightlightBlue}>
          {" "}
          AI
        </Highlighter>{" "}
        <BrainCircuit size={15} style={{ marginRight: ".3em" }} />.
      </Text>
      <Text as="p" size={contentFontSizeBreakpoint}>
        I love exploring new ideas , seeking innovation and inspiration in both
        work and life, and I believe that every challenge is an opportunity for
        growth.
      </Text>
    </>
  );

  const FirstParagraph_ch = () => (
    <Text size={contentFontSizeBreakpoint}>
      嗨！我是 <Highlighter backgroundColor="#97999A">張黛妤</Highlighter>{" "}
      ，一位對{" "}
      <Highlighter backgroundColor={ColorSets.hightlightBlue}>
        {" "}
        IoT{" "}
      </Highlighter>{" "}
      <MonitorCheck size={15} style={{ marginRight: ".3em" }} />,
      <Highlighter backgroundColor={ColorSets.hightlightBlue}>
        software{" "}
      </Highlighter>{" "}
      <Binary size={15} style={{ marginRight: ".3em" }} />和{" "}
      <Highlighter backgroundColor={ColorSets.hightlightBlue}> AI</Highlighter>{" "}
      <BrainCircuit size={15} style={{ marginRight: ".3em" }} />
      .充滿熱情與好奇心的 developer。
      我熱愛探索新知，喜歡在工作與生活中尋找創新與靈感，並相信每個挑戰都是成長的契機。
    </Text>
  );

  const Secondaragraph_en = () => (
    <>
      <Text as="p" size={contentFontSizeBreakpoint}>
        I’m passionate about a wide range of interests including street dance
        (hiphop, popping), yoga, history (especially British medieval history),
        literature, and cooking. These hobbies offer me a space to recharge and
        spark creativity beyond my professional life.
      </Text>
    </>
  );

  const Secondaragraph_ch = () => (
    <Text size={contentFontSizeBreakpoint}>
      我對多個領域充滿熱情，包括街舞（Hiphop、Popping）、瑜珈、歷史（尤其是英國中世紀歷史）、文學與烹飪等。這些興趣讓我在工作之餘找到平衡與創意的出口。
    </Text>
  );

  const Note_ch = () => (
    <Box flexGrow="0">
      <Text mr=".5em" size={contentFontSizeBreakpoint}>
        我是 <Highlighter backgroundColor="#FF5E5E">狗派</Highlighter> !
      </Text>
      <Dog size={18} alignmentBaseline="central" />
      <PawPrint size={18} />
    </Box>
  );

  const Note_en = () => (
    <Box flexGrow="0">
      <Text mr=".5em" size={contentFontSizeBreakpoint}>
        I’m definitely a{" "}
        <Highlighter backgroundColor="#FF5E5E">dog person</Highlighter> !
      </Text>
      <Dog size={18} alignmentBaseline="central" />
      <PawPrint size={18} />
    </Box>
  );

  return (
    <Flex
      direction={{ initial: "column", md: "row" }}
      align="center"
      gap="5"
      width="100%"
    >
      <Flex style={{ flex: 1, flexDirection: "column" }} gap={"2em"} mt="1em">
        {language === "en" ? <FirstParagraph_en /> : <FirstParagraph_ch />}
        {/* 個性與興趣 */}
        <Box>
          <Text
            as="p"
            style={{ fontWeight: 900 }}
            size={contentFontSizeBreakpoint}
          >
            {language === "en" ? "Personality & Interests" : "個性與興趣 "}
          </Text>

          {/* 內文 */}
          {language === "en" ? <Secondaragraph_en /> : <Secondaragraph_ch />}
        </Box>

        {/* 語言 */}
        <Box>
          <Text
            as="p"
            style={{ fontWeight: 900 }}
            size={contentFontSizeBreakpoint}
          >
            {language === "en" ? "Languages" : "語言 "}
          </Text>
          {/* 內文 */}
          {language === "en" ? <Secondaragraph_en /> : <Secondaragraph_ch />}
        </Box>

        {/* 備註 */}
        <Box>
          <Text
            as="p"
            style={{ fontWeight: 900 }}
            size={contentFontSizeBreakpoint}
          >
            {language === "en" ? "Note" : "備註 "}
          </Text>

          {/* 內文 */}
          {language === "en" ? <Note_en /> : <Note_ch />}
        </Box>
      </Flex>

      <Box style={{ width: "250px", maxWidth: "100%" }}>
        <img
          src={myPhoto}
          alt="Lana's photo"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            borderRadius: "var(--radius-3)",
          }}
        />
      </Box>
    </Flex>
  );
};

export default MePage;
