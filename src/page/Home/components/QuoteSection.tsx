import { Box, Text } from "@radix-ui/themes";
import { ColorSets } from "@style/color";
import Quote from "@component/Quote";
import Highlighter from "@component/Highlighter";

const QuoteSection = () => {
  return (
    <>
      <Box
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 100,
        }}
      >
        {/* Quote 名字 */}
        <Quote accentColor={ColorSets.hightlightOrange} textColor="#FFF">
          <Text size="3" style={{ color: "#FFF" }}>
            HELLO THERE{" "}
            <span
              style={{
                display: "inline-block",
                transformOrigin: "70% 70%",
                animation: "wave 2s ease-in-out infinite",
                color: "#FFF",
              }}
            >
              👋
            </span>{" "}
            , IT'S
          </Text>

          <Text
            style={{
              color: "#FFF",
              // fontSize: "4em",
              lineHeight: 1,
            }}
            weight="bold"
            size={{ initial: "8", xs: "9" }}
          >
            LANA CHANG
          </Text>
        </Quote>
        <Text style={{ color: "#FFF" }}>
          A versatile developer experienced in{" "}
          <Highlighter backgroundColor="#FF5E5E">
            {" "}
            <Text style={{ color: "#FFF" }}>cross-platform</Text>
          </Highlighter>{" "}
          apps,{" "}
          <Highlighter backgroundColor="#FF5E5E">
            <Text style={{ color: "#FFF" }}>web</Text>
          </Highlighter>{" "}
          development, and{" "}
          <Highlighter backgroundColor="#FF5E5E">
            {" "}
            <Text style={{ color: "#FFF" }}>backend</Text>
          </Highlighter>{" "}
          APIs, specializing in{" "}
          <Highlighter backgroundColor="#FFC45E">
            {" "}
            <Text style={{ color: "#FFF" }}>AI</Text>
          </Highlighter>{" "}
          data analysis and signal processing (
          <Highlighter backgroundColor="#FFC45E">
            {" "}
            <Text style={{ color: "#FFF" }}>NILM</Text>
          </Highlighter>
          ). Skilled in{" "}
          <Highlighter backgroundColor="#75CAF4">
            {" "}
            <Text style={{ color: "#FFF" }}>workflow</Text>
          </Highlighter>{" "}
          automation (Git, CI/CD, deployment) and passionate about{" "}
          <Highlighter backgroundColor="#B4FFD8">
            {" "}
            <Text style={{ color: "#FFF" }}>UI/UX</Text>
          </Highlighter>{" "}
          design (Figma).
        </Text>
      </Box>

      <style>
        {`
        @keyframes colorCycle {
          0% {
            color: #FFF;
          }
          14% {
            color: #FF5E5E;
          }
          33% {
            color: #FF5E5E;
          }
          45% {
            color: #75CAF4;
          }
          66% {
            color: #75CAF4;
          }
          100% {
            color: #FFF;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }


        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(20deg);
          }
          20% {
            transform: rotate(-20deg);
          }
          30% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
      }`}
      </style>
    </>
  );
};

export default QuoteSection;
