import TerminalBox from "./TerminalBox";
import { Code2 } from "lucide-react";
import { Server } from "lucide-react";
import { Wrench } from "lucide-react";
import { Paintbrush2 } from "lucide-react";
import { FaReact } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoNodejs,
  BiLogoFirebase,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { IoLogoDocker } from "react-icons/io5";
import { SiEslint } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { PiDesktopDuotone } from "react-icons/pi";
import { IoLeaf } from "react-icons/io5";
import { TbWaveSawTool } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { FaCubesStacked } from "react-icons/fa6";
import { BiServer } from "react-icons/bi";

const programmingLanguages = [
  { name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: BiLogoJavascript, color: "#3178C6" },
  { name: "Python", icon: BiLogoPython, color: "#FFCA28" },
  { name: "C/C++", icon: BiLogoCPlusPlus, color: "#00599C" },
];

const frontendDevelopment = [
  { name: "React / React Native", icon: FaReact, color: "#61DAFB" },
  { name: "Zustand", icon: BiServer, color: "#6E40C9" }, // custom violet tone
];

const backendDevelopment = [
  { name: "Node.js", icon: BiLogoNodejs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Firebase", icon: BiLogoFirebase, color: "#FFCA28" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
];

const toolsAndTechnologies = [
  { name: "Git", icon: FaGithub, color: "#181717" },
  { name: "Docker", icon: IoLogoDocker, color: "#2496ED" },
  { name: "ESLint / Prettier", icon: SiEslint, color: "#4B32C3" },
  { name: "Vite", icon: TbBrandVite, color: "#646CFF" },
];

const aiAndResearch = [
  {
    name: "Green Learning",
    icon: IoLeaf, // 可用 Lucide 的 Leaf 圖示
    color: "#228B22", // ForestGreen 色調代表節能永續
  },
  {
    name: "PixelHop",
    icon: FaCubesStacked, // 可找類似頻譜或分析 icon，例如 waveform, graph 等
    color: "#8E44AD", // 紫色系表示特徵提取/圖像處理
  },
  {
    name: "NILM (Energy Disaggregation)",
    icon: TbWaveSawTool, // Lucide 的閃電圖示，代表電力
    color: "#F59E0B", // 黃橘色，常用於表示能源
  },
];

const designTools = [{ name: "Figma", icon: FiFigma, color: "#F24E1E" }];

const TechStackSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TerminalBox
        title="Programming Languages"
        titleIcon={Code2}
        list={programmingLanguages}
      />
      <TerminalBox
        title="Frontend Development"
        titleIcon={PiDesktopDuotone}
        list={frontendDevelopment}
      />
      <TerminalBox
        title="Backend Development"
        titleIcon={Server}
        list={backendDevelopment}
      />
      <TerminalBox
        title="Tools & Technologies"
        titleIcon={Wrench}
        list={toolsAndTechnologies}
      />
      <TerminalBox
        title="AI & Research"
        titleIcon={LuBrain}
        list={aiAndResearch}
      />
      <TerminalBox title="Design" titleIcon={Paintbrush2} list={designTools} />
    </div>
  );
};

export default TechStackSection;
