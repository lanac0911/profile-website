import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "ABC Corporation",
      period: "Jan 2020 - Present",
      description:
        "Leading the development of scalable web applications using React, Node.js and cloud technologies.",
    },
    {
      title: "Software Engineer",
      company: "XYZ Inc.",
      period: "Jun 2017 - Dec 2019",
      description:
        "Developed and maintained robust applications using React and Python.",
    },
    {
      title: "Intern",
      company: "Startup Lab",
      period: "Jan 2017 - May 2017",
      description:
        "Assisted in building prototypes and conducting market research for new product ideas.",
    },
  ];

  return (
    <Box style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Text size="5" weight="bold" style={{ marginBottom: "1rem" }}>
        Experience
      </Text>
      {experiences.map((exp, index) => (
        <Box key={index} style={{ marginBottom: "2rem" }}>
          <Flex direction="row" justify="space-between" align="center">
            <Text size="4" weight="bold">
              {exp.title}
            </Text>
            <Text size="2" color="gray">
              {exp.period}
            </Text>
          </Flex>
          <Text
            size="3"
            style={{
              fontStyle: "italic",
              marginTop: "0.5rem",
              color: "#555",
            }}
          >
            {exp.company}
          </Text>
          <Text size="2" style={{ marginTop: "0.5rem", lineHeight: 1.5 }}>
            {exp.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ExperiencePage;
