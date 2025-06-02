// components/ProjectTags.tsx
import React from "react";
import { Box, Flex } from "@radix-ui/themes";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiServer,
  BiLogoFirebase,
  BiLogoNodejs,
} from "react-icons/bi";
import { FaReact, FaGithub } from "react-icons/fa";
import { IoLeaf, IoLogoDocker } from "react-icons/io5";
import { SiExpress, SiMysql, SiEslint } from "react-icons/si";
import { TbBrandVite, TbWaveSawTool } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { SiJfrogpipelines } from "react-icons/si";
import { MdAndroid } from "react-icons/md";
import { SiIos } from "react-icons/si";
import { IoTabletPortraitSharp } from "react-icons/io5";

type ProjectTagsProps = {
  tags: string[];
};

const iconMap: Record<string, React.ReactNode> = {
  React: <FaReact color="#61DAFB" size={16} />,
  "React Native": <FaReact color="#61DAFB" size={16} />,
  TypeScript: <BiLogoTypescript color="#3178C6" size={16} />,
  JavaScript: <BiLogoJavascript color="#F7DF1E" size={16} />,
  Python: <BiLogoPython color="#3776AB" size={16} />,
  "C/C++": <BiLogoCPlusPlus color="#00599C" size={16} />,
  Zustand: <BiServer color="#6E40C9" size={16} />,
  "Node.js": <BiLogoNodejs color="#3C873A" size={16} />,
  "Express.js": <SiExpress color="#000000" size={16} />,
  Firebase: <BiLogoFirebase color="#FFCA28" size={16} />,
  MySQL: <SiMysql color="#00758F" size={16} />,
  Git: <FaGithub color="#181717" size={16} />,
  Docker: <IoLogoDocker color="#2496ED" size={16} />,
  "ESLint / Prettier": <SiEslint color="#4B32C3" size={16} />,
  Vite: <TbBrandVite color="#646CFF" size={16} />,
  Figma: <FiFigma color="#F24E1E" size={16} />,
  "Green Learning": <IoLeaf color="#228B22" size={16} />,
  PixelHop: <FaGithub color="#8E44AD" size={16} />,
  "NILM (Energy Disaggregation)": <TbWaveSawTool color="#F59E0B" size={16} />,
  "Android/iOS": (
    <>
      <SiIos color="#999999" size={16} />
      <MdAndroid color="#A0C036" size={16} />
    </>
  ),
  "Sunmi Optimization": <FaReact color="#999999" size={16} />,
  "CI/CD": <SiJfrogpipelines color="#181717" size={16} />,
  "Apple Store": <FaGithub color="#000000" size={16} />,
  IoT: <IoTabletPortraitSharp color="#3178C6" size={16} />,
  Camera: <FiFigma color="#737373" size={16} />,
};

export const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  return (
    <Flex wrap="wrap" gap="0.3em" mt="3">
      {tags.map((tag) => (
        <Box
          key={tag}
          px="0.7em"
          py="0.3em"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            backgroundColor: "#f9fafb",
            borderRadius: "999px",
            fontSize: "0.875rem",
            border: "1px solid #e5e7eb",
            color: "#374151",
          }}
        >
          {iconMap[tag] ?? null}
          {tag}
        </Box>
      ))}
    </Flex>
  );
};
