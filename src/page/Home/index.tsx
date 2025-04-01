import { Box, Flex, Section } from "@radix-ui/themes";
import Background from "./components/Background";
import CodeSection from "./components/CodeSection";
import QuoteSection from "./components/QuoteSection";
import GridMenu from "./components/GridMenu";

const Home = () => {
  return (
    <Background>
      {/* 最外層 Section 使用 100vh 填滿視窗高度 */}
      <Section px={{ initial: "7", xs: "8" }} height="100vh">
        <Flex gap="6" py="5" direction="row" style={{ height: "100%" }}>
          {/* 左半部分：在手機時 class 設定為 left-part，寬度在手機下 100% */}
          <Flex
            gap={{ initial: "5", xs: "9" }}
            className="left-part"
            justify="center"
            style={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 上半部 60% */}
            <QuoteSection />

            {/* 下半部 40% */}
            <GridMenu />
          </Flex>

          {/* 右半部分：在手機下隱藏 */}
          <Box
            className="right-part"
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CodeSection />
          </Box>
        </Flex>
      </Section>

      {/* CSS 調整：在手機狀態下隱藏右半部分並讓左半部分擴展至 100% 寬度 */}
      <style>
        {`
          @media (max-width: 768px) {
            .right-part {
              display: none !important;
            }
            .left-part {
              width: 100% !important;
            }
          }
      `}
      </style>
    </Background>
  );
};

export default Home;
