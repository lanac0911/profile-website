import { Box, Text } from "@radix-ui/themes";
import WindowSection from "@component/WindowSection";
import TypingEffect from "@component/TypingEffect"; // 請依專案路徑調整

// 假設的 AboutMe 資料，可根據實際情況調整
const me = {
  personality: ["Passionate", "Efficient", "Creative"],
  skills: ["FullEnd", "AIProgramming", "Software", "DataAnalysis"],
  education: [
    {
      degree: "Master",
      field: "Computer Science",
      institution: "NCHU",
      period: "2023-25",
    },
    {
      degree: "Bachelor",
      field: "Computer Science",
      institution: "FCU",
      period: "2018-22",
    },
  ],
};
const codestyle = {
  white: "#fff",
  importFrom: "#C385BE",
  brackets: "#FFD602",
  attribute: "#9CDCFD",
  library: "#CE9178",
  class: "#569CD6",
  className: "#4AB7A0",
  attributeName: "#DCDCAA",
  comment: "#6A9956",
  constName: "#4FC1FF",
};

const CodeSection = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <WindowSection
      textCenter={false}
      headerBgColor="#0A0E1C"
      headerBorderColor="#0A0E1C"
      frosted
      hoverContent={<span>🎉 Hovering!</span>}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {!isMobile && (
        <>
          {/* import 人格特質 */}
          <Text size="1" align="left">
            <Text size="1" align="left" style={{ color: codestyle.importFrom }}>
              import
            </Text>{" "}
            <Text
              size="1"
              align="left"
              style={{ color: codestyle.brackets }}
            >{`{`}</Text>{" "}
          </Text>
          {me.personality.map((per, idx) => (
            <Text as="p" key={idx} style={{ textAlign: "left", lineHeight: 1 }}>
              <Text size="1" style={{ color: codestyle.attribute }}>
                {"\u00A0\u00A0\u00A0\u00A0"}
                {per}
              </Text>
              <Text size="1" style={{ color: codestyle.white }}>
                ,
              </Text>
            </Text>
          ))}
          <Text size="1">
            <Text size="1" style={{ color: codestyle.brackets }}>{`}`}</Text>{" "}
            <Text size="1" style={{ color: codestyle.importFrom }}>
              from
            </Text>{" "}
            <Text size="1" style={{ color: codestyle.library }}>
              'Personality'
            </Text>
          </Text>
          <br />
          {/* import 'Skills' */}
          <Text size="1" align="left">
            <Text size="1" align="left" style={{ color: codestyle.importFrom }}>
              import
            </Text>{" "}
            <Text
              size="1"
              align="left"
              style={{ color: codestyle.brackets }}
            >{`{`}</Text>{" "}
          </Text>
          {me.skills.map((per, idx) => (
            <Text as="p" key={idx} style={{ textAlign: "left", lineHeight: 1 }}>
              <Text size="1" style={{ color: codestyle.attribute }}>
                {"\u00A0\u00A0\u00A0\u00A0"}
                {per}
              </Text>
              <Text size="1" style={{ color: codestyle.white }}>
                ,
              </Text>
            </Text>
          ))}
          <Text size="1">
            <Text size="1" style={{ color: codestyle.brackets }}>{`}`}</Text>{" "}
            <Text size="1" style={{ color: codestyle.importFrom }}>
              from
            </Text>{" "}
            <Text size="1" style={{ color: codestyle.library }}>
              'Skills'
            </Text>
          </Text>
          <br />
        </>
      )}
      {/* import 'Class' */}
      <Text size="1">
        <Text size="1" style={{ color: codestyle.class }}>
          class
        </Text>{" "}
        <Text size="1" style={{ color: codestyle.className }}>
          AboutMe
        </Text>{" "}
        <Text size="1" style={{ color: codestyle.brackets }}>{`{`}</Text>
      </Text>
      {/* <Text as="p" size="1" style={{ color: codestyle.comment }} mt="1">
        {"\u00A0\u00A0"}// 特質
      </Text>{" "} */}
      <Text>
        <Text size="1" style={{ lineHeight: 1 }}>
          {"\u00A0\u00A0"}
          <br />
          <Text size="1" style={{ color: codestyle.className, lineHeight: 1 }}>
            {"\u00A0\u00A0"}
            personality
          </Text>{" "}
          <Text size="1" style={{ color: codestyle.white }}>
            =
          </Text>{" "}
          <Text size="1" style={{ color: codestyle.importFrom }}>{`[`}</Text>{" "}
          {me.personality.map((per, idx) => (
            <Text key={idx} style={{ textAlign: "left" }}>
              {" "}
              <Text size="1" style={{ color: codestyle.attribute }}>
                {per}
              </Text>
              {idx !== me.personality.length - 1 && (
                <Text size="1" style={{ color: codestyle.white }}>
                  ,
                </Text>
              )}
            </Text>
          ))}
          <Text
            size="1"
            style={{ color: codestyle.importFrom, lineHeight: 1 }}
          >{`]`}</Text>{" "}
          <Text size="1" style={{ color: codestyle.white }}>
            ;
          </Text>
          <Text as="span" size="1" style={{ color: codestyle.comment }} mt="1">
            {"\u00A0\u00A0"}// 特質
          </Text>
        </Text>
      </Text>
      <br />

      <Text>
        <Text size="1">
          {"\u00A0\u00A0"}
          <Text size="1" style={{ color: codestyle.className }}>
            skills
          </Text>{" "}
          <Text size="1" style={{ color: codestyle.white }}>
            =
          </Text>{" "}
          <Text size="1" style={{ color: codestyle.importFrom }}>{`[`}</Text>{" "}
          {me.skills.map((per, idx) => (
            <Text key={idx} style={{ textAlign: "left" }}>
              {" "}
              <Text size="1" style={{ color: codestyle.attribute }}>
                {per}
              </Text>
              {idx !== me.skills.length - 1 && (
                <Text size="1" style={{ color: codestyle.white }}>
                  ,
                </Text>
              )}
            </Text>
          ))}
          <Text size="1" style={{ color: codestyle.importFrom }}>{`]`}</Text>{" "}
          <Text size="1" style={{ color: codestyle.white }}>
            ;
          </Text>
        </Text>
        {/* (主要) 專業技能 */}
        <Text as="span" size="1" style={{ color: codestyle.comment }}>
          {"\u00A0\u00A0"}// 技能
        </Text>{" "}
      </Text>
      <Box
        style={{
          padding: 0,
          textAlign: "left",
        }}
      >
        <Text size="1">
          {"\u00A0\u00A0"}
          <Text size="1" style={{ color: codestyle.className }}>
            education
          </Text>{" "}
          <Text size="1" style={{ color: codestyle.white }}>
            =
          </Text>{" "}
        </Text>
        <Text size="1" style={{ color: codestyle.importFrom }}>{`[`}</Text>{" "}
        <br />
        {me.education.map((edu, idx) => (
          <>
            {idx !== 0 && <br />}

            <Text key={idx} style={{ textAlign: "left" }}>
              {"\u00A0\u00A0\u00A0\u00A0"}
              <Text size="1" style={{ color: codestyle.class }}>
                new
              </Text>{" "}
              <Text size="1" style={{ color: codestyle.attributeName }}>
                {edu.degree}
              </Text>{" "}
              <Text size="1" style={{ color: codestyle.class }}>
                {`(`}
              </Text>{" "}
              <Text size="1" style={{ color: codestyle.library }}>
                '{edu.field}', '{edu.institution}', '{edu.period}'
              </Text>{" "}
              <Text size="1" style={{ color: codestyle.class }}>
                {`)`}
                {/* <br /> */}
              </Text>{" "}
            </Text>
          </>
        ))}
        <br />
        {"\u00A0\u00A0\u00A0"}
        <Text size="1" style={{ color: codestyle.importFrom }}>{`]`}</Text>{" "}
        <Text size="1" style={{ color: codestyle.white }}>
          ;
        </Text>
        <Text size="1" style={{ color: codestyle.comment }}>
          {"\u00A0\u00A0"} // 學歷
        </Text>{" "}
      </Box>
      <Text>
        <Text size="1" style={{ color: codestyle.brackets }}>{`}`}</Text>
        <Text size="1" style={{ color: codestyle.white }}>
          ;
        </Text>
      </Text>
      {/* const me */}
      {/* 使用打字效果呈現最後這行 */}
      <Text
        as="p"
        style={{
          color: codestyle.white,
          textAlign: "left",
          fontFamily: "monospace",
        }}
      >
        <TypingEffect text="const me = new AboutMe();" speed={150} />
      </Text>
    </WindowSection>
  );
};

export default CodeSection;
