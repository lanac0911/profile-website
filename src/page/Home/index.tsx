import { Box, Flex, Section } from "@radix-ui/themes";
import Background from "./components/Background";
import CodeSection from "./components/CodeSection";
import QuoteSection from "./components/QuoteSection";
import GridMenu from "./components/GridMenu";

const Home = () => {
  return (
    <Background>
      <Section px={{ initial: "7", xs: "8" }} height="100vh">
        <Flex gap="6" py="5" direction="row" style={{ height: "100%" }}>
          {/* 左側區塊 */}
          <Flex
            gap="6"
            className="left-part"
            justify="center"
            style={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Quote */}
            <Box className="section-quote">
              <QuoteSection />
            </Box>

            {/* ✅ 手機顯示的 CodeSection（簡化版） */}
            <Box className="mobile-only">
              <CodeSection isMobile />
            </Box>

            {/* GridMenu */}
            <Box className="section-grid">
              <GridMenu />
            </Box>
          </Flex>

          {/* ✅ 桌面右側 CodeSection */}
          <Box
            className="section-code desktop-only"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CodeSection />
          </Box>
        </Flex>
      </Section>

      <style>
        {`
      @media (max-width: 768px) {
        .desktop-only {
          display: none !important;
        }
        .mobile-only {
          display: block !important;
        }
        .left-part {
          width: 100% !important;
        }
      }

      @media (min-width: 769px) {
        .desktop-only {
          display: block !important;
        }
        .mobile-only {
          display: none !important;
        }
      }
    `}
      </style>
    </Background>
  );
};

export default Home;
