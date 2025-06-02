import { Box, Flex, Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Highlighter from "@/components/Highlighter";
import { ColorSets } from "@/styles/color";
import LanguageToggle from "@/components/Language/LanguageToggle";
import { useLanguage } from "@/components/Language/LanguageContext";
import { ProjectTags } from "@/components/ProjectTags";
import { FiExternalLink } from "react-icons/fi";
import { Project, projects } from "./projects";
import { fadeInVariant } from "@/styles/animate";

const ProjectsPage = () => {
  const { language } = useLanguage();
  return (
    <Box px={{ initial: "4", md: "6" }}>
      <LanguageToggle />

      <Flex
        direction="column"
        gap={{
          initial: "3.5em",
          xs: "2.5em",
        }}
      >
        {projects.map((project: Project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={project.title[language]}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <Flex
                direction={{
                  initial: "column",
                  xs: isEven ? "row" : "row-reverse",
                }}
                style={{ flex: 1 }}
                gap="1.5em"
                align="center"
                justify="between"
              >
                {/* Image */}
                <Box style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={project.imageUrl}
                    alt={project.title[language]}
                    style={{
                      height: 280,
                      objectFit: "cover",
                      borderRadius: 12,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />

                  {/* 圓形舞台效果 */}
                  <Box
                    style={{
                      position: "absolute",
                      bottom: -20,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      height: "50px",
                      background:
                        "radial-gradient(ellipse at center, #00000022 100%, #00000022 50%)",
                      borderRadius: "40%",
                      zIndex: 0,
                      filter: "blur(3px)",
                    }}
                  />
                </Box>

                {/* Text */}
                <Box
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Highlighter backgroundColor={ColorSets.hightlightBlue}>
                    <Text size="6" style={{ fontWeight: 700 }} mb="3">
                      {project.title[language]}
                    </Text>
                  </Highlighter>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginLeft: "0.4em",
                      }}
                      aria-label="Open project in new tab"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                  <Text as="p" size="3" color="gray">
                    {project.description[language]()}
                  </Text>
                  <Flex wrap="wrap" gap="1em" mt="3">
                    <ProjectTags tags={project.tags} />
                  </Flex>
                </Box>
              </Flex>
            </motion.div>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ProjectsPage;
