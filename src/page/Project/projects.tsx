import lpgImag from "@img/LPG_offcial.png";
import pawprintImag from "@img/pawprint3.png";
import thsisImag from "@img/thsis.png";

import UnderlineHandDrawn from "@/components/UnderlineHandDrawn";
import { JSX } from "react";
import { TagTheme, TagVariant } from "@/components/Tag";

export type LocalizedText = {
  en: () => JSX.Element;
  zh: () => JSX.Element;
};

export type Project = {
  title: {
    en: string;
    zh: string;
    highlightColor?: string;
  };
  description: LocalizedText;
  tags: string[];
  imageUrl: string;
  url?: string;
  catgories?: { title: string; type?: TagTheme; variant?: TagVariant }[];
  imgWidth?: string | number;
};

export const projects: Project[] = [
  {
    title: {
      en: "LPG Cloud Delivery App",
      zh: "LPG Cloud 瓦斯配送 App",
    },
    description: {
      en: () => (
        <>
          <p>
            LPG Cloud is an IoT-based gas distribution system that modernizes
            traditional LPG services in Taiwan. I was responsible for building
            and deploying a cross-platform app that supports smart delivery
            operations and enhances logistics efficiency.
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>
              Using
              <UnderlineHandDrawn color={"#61DAFB"}>
                React Native
              </UnderlineHandDrawn>
              for both Android and iOS.
            </li>
            <li>
              Independently set up
              <UnderlineHandDrawn color={"#F59E0B"}>CI/CD</UnderlineHandDrawn>
              pipelines and handled Apple Store submission.
            </li>
            <li>
              Integrated
              <UnderlineHandDrawn color={"#FCD34D"}>
                Firebase FCM
              </UnderlineHandDrawn>
              for notification and alert.
            </li>
            <li>
              Optimized
              <span style={{ fontWeight: 600, color: "black" }}>
                {" "}
                performance{" "}
              </span>
              for Sunmi devices used in logistics.
            </li>
            <li>
              Integrated custom
              <span style={{ fontWeight: 600, color: "black" }}> SDKs </span>
              and wrote native Android/iOS modules to support device-specific
              features and OS-level requirements.
            </li>
            <li>
              <span style={{ fontWeight: 600, color: "black" }}>
                Collaborated{" "}
              </span>
              closely with backend developers for API integration and debugging.
            </li>
          </ul>
        </>
      ),
      zh: () => (
        <>
          <p style={{ color: "black" }}>
            LPG Cloud 是一套專為台灣瓦斯行打造的 IoT
            雲端瓦斯配送平台，整合智慧派單與智慧瓦斯表，提升配送效率與用氣安全。主要負責
            App 端之開發與上線部署作業。
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>
              使用
              <UnderlineHandDrawn color={"#61DAFB"}>
                React Native
              </UnderlineHandDrawn>
              開發 Android / iOS 雙平台 App。
            </li>
            <li>
              獨立建置
              <UnderlineHandDrawn color={"#F59E0B"}>CI/CD</UnderlineHandDrawn>
              流程並完成 Apple Store 上架。
            </li>
            <li>
              串接
              <UnderlineHandDrawn color={"#FCD34D"}>
                Firebase FCM
              </UnderlineHandDrawn>
              ，實現即時推播通知。
            </li>
            <li>
              針對 Sunmi 商業裝置進行
              <span style={{ fontWeight: 600, color: "black" }}>效能優化</span>
              。
            </li>
            <li>
              整合客製
              <span style={{ fontWeight: 600, color: "black" }}>SDK</span>
              ，並撰寫 Android / iOS 原生模組支援裝置功能與底層需求。
            </li>
            <li>
              <span style={{ fontWeight: 600, color: "black" }}>
                與後端密切合作
              </span>
              ，協助 API 串接與除錯。
            </li>
          </ul>
        </>
      ),
    },
    tags: [
      "React Native",
      "CI/CD",
      "Firebase",
      "Android/iOS",
      "TypeScript",
      "IoT",
    ],
    imageUrl: lpgImag,
    imgWidth: "100%",
    catgories: [{ title: "Frontend - APP" }],
    url: "https://www.artifactdev.tw/",
  },
  {
    title: {
      en: "PawPrints (Pet App)",
      zh: "毛印（寵物健康追蹤 App）",
      highlightColor: "#EFCF0B",
    },
    description: {
      en: () => (
        <>
          <p>
            A cross-platform React Native mobile app for tracking the health of
            elderly pets, developed as a full-stack solo project. It enables
            owners to monitor vital signs and daily wellness with intuitive
            tools, AI-powered camera analysis, and seamless data management from
            backend to frontend.
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>
              Developed with
              <UnderlineHandDrawn color={"#61DAFB"}>
                React Native
              </UnderlineHandDrawn>
              for seamless Android and iOS support.
            </li>
            <li>
              Backend powered by
              <UnderlineHandDrawn color={"#3C873A"}>Node.js</UnderlineHandDrawn>
              with
              <UnderlineHandDrawn color={"#000"}> Prisma </UnderlineHandDrawn>
              ORM and
              <UnderlineHandDrawn color={"#035D85"}>MySQL</UnderlineHandDrawn>
              database for structured health data storage.
            </li>
            <li>
              Utilized
              <UnderlineHandDrawn color={"#FFCA28"}>
                Firebase
              </UnderlineHandDrawn>
              for real-time data sync and cloud storage of health logs.
            </li>
            <li>
              Designed with
              <UnderlineHandDrawn color={"#F24E1E"}>Figma</UnderlineHandDrawn>
              to create a pet-friendly, clean, and user-centered interface.
            </li>
          </ul>
        </>
      ),

      zh: () => (
        <>
          <p>
            一款跨平台（React Native）老年寵物健康追蹤
            App，由我獨立完成前後端開發。提供飼主透過直覺化工具與 AI
            相機分析監測生命跡象與日常健康狀況，並實現後端到前端的全流程數據管理。
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>
              使用
              <UnderlineHandDrawn color={"#61DAFB"}>
                React Native
              </UnderlineHandDrawn>
              開發，支援 Android 與 iOS 雙平台。
            </li>
            <li>
              後端以
              <UnderlineHandDrawn color={"#3C873A"}>Node.js</UnderlineHandDrawn>
              搭配
              <UnderlineHandDrawn color={"#000"}> Prisma </UnderlineHandDrawn>與
              <UnderlineHandDrawn color={"#035D85"}>MySQL</UnderlineHandDrawn>
              ，進行結構化健康資料儲存。
            </li>
            <li>
              透過
              <UnderlineHandDrawn color={"#FFCA28"}>
                Firebase
              </UnderlineHandDrawn>
              實現即時資料同步與健康紀錄雲端保存。
            </li>
            <li>
              使用{" "}
              <UnderlineHandDrawn color={"#F24E1E"}>Figma</UnderlineHandDrawn>
              設計寵物友善、簡潔直覺的介面體驗。
            </li>
          </ul>
        </>
      ),
    },
    tags: [
      "Node.js",
      "Prisma",
      "MySQL",
      "Express.js",
      "React Native",
      "TypeScript",
      "Figma",
    ],
    catgories: [],
    imageUrl: pawprintImag,
  },
  {
    title: {
      en: "Master Thesis Dashboard & Demo",
      zh: "碩士論文 Dashboard / Demo",
      highlightColor: "#4A986D",
    },
    description: {
      en: () => (
        <>
          <p>
            A web-based Dashboard & Demo site for my master's thesis,
            showcasing:
            <b> thesis overview</b>, <b> simplified architecture</b>, and a
            simulated <b>NILM real-world application scenario</b>. Built with{" "}
            <UnderlineHandDrawn color={"#61DAFB"}>React</UnderlineHandDrawn>,
            the site serves as a visual presentation tool for academic and
            demonstration purposes.
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>
              Provides a concise introduction to my thesis objectives and
              methods.
            </li>
            <li>
              Displays a simplified system architecture for quick understanding.
            </li>
            <li>
              Simulates real-world
              <UnderlineHandDrawn color={"#4A986D"}>NILM</UnderlineHandDrawn>
              application dashboards for load monitoring.
            </li>
            <li>
              <span style={{ fontWeight: 600, color: "#E43E3E" }}>
                Currently only contains outline content due to upcoming paper
                publication.
              </span>
            </li>
          </ul>
        </>
      ),

      zh: () => (
        <>
          <p>
            這是一個針對碩士論文所製作的
            <b>Dashboard 與示範網站</b>，內容包括：
            <b>論文簡介</b>、<b>簡易架構</b>以及
            <b>NILM 實際應用情況的模擬</b>。 採用
            <UnderlineHandDrawn color={"#61DAFB"}>React</UnderlineHandDrawn>
            開發，作為學術展示與 Demo 之用。
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>提供論文研究目標與方法的簡要介紹。</li>
            <li>呈現簡化後的系統架構，便於快速理解。</li>
            <li>
              模擬
              <UnderlineHandDrawn color={"#4A986D"}>NILM</UnderlineHandDrawn>
              在實際應用中的負載監測情境。
            </li>
            <li>
              <span style={{ fontWeight: 600, color: "#E43E3E" }}>
                因準備發表論文，目前僅提供大綱內容。
              </span>
            </li>
          </ul>
        </>
      ),
    },
    tags: [
      "React",
      "NILM (Energy Disaggregation)",
      "Dashboard",
      "Data Visualization",
      "Signal Processing",
      "Web Demo",
    ],
    imageUrl: thsisImag,
    url: "https://nilm-dashboard-px4y.vercel.app/",
  },
];
