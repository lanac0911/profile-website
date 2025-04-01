import { Box, Flex, Text } from "@radix-ui/themes";

const EducationPage = () => {
  const educationItems = [
    {
      degree: "Master of Computer Science",
      institution: "NCHU",
      period: "2023 - 2025",
      description: "Focus on advanced algorithms, distributed systems, and emerging technologies.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "FCU",
      period: "2018 - 2022",
      description: "Studied software development, data structures, and modern web programming.",
    },
  ];

  return (
    <Box style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Text size="5" weight="bold" style={{ marginBottom: "1rem" }}>
        Education
      </Text>
      <Box className="timeline">
        {educationItems.map((item, index) => (
          <Flex key={index} className="timeline-item" style={{ marginBottom: "2rem" }}>
            {/* 左側：時間線與圓點 */}
            <Box className="timeline-marker">
              <Box className="timeline-circle" />
              {/* 如果不是最後一項，顯示連接線 */}
              {index < educationItems.length - 1 && <Box className="timeline-line" />}
            </Box>
            {/* 右側：內容 */}
            <Box className="timeline-content" style={{ marginLeft: "1rem" }}>
              <Text size="4" weight="bold">
                {item.degree}
              </Text>
              <Text size="2" color="gray">
                {item.institution} | {item.period}
              </Text>
              <Text size="2" style={{ marginTop: "0.5rem", lineHeight: 1.5 }}>
                {item.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <style>{`
        .timeline {
          position: relative;
          padding-left: 20px;
        }
        .timeline-item {
          position: relative;
          display: flex;
        }
        .timeline-marker {
          position: relative;
          width: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-circle {
          width: 12px;
          height: 12px;
          background: #34468C;
          border: 2px solid #0E1326;
          border-radius: 50%;
          z-index: 1;
        }
        .timeline-line {
          flex: 1;
          width: 2px;
          background: #0E1326;
          margin-top: 2px;
        }
      `}</style>
    </Box>
  );
};

export default EducationPage;
