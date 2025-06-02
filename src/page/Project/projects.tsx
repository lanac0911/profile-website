import lpgImag from "@img/lpg.png";
import Highlighter from "@/components/Highlighter";
import { JSX } from "react";

export type LocalizedText = {
  en: () => JSX.Element;
  zh: () => JSX.Element;
};

export type Project = {
  title: { en: string; zh: string };
  description: LocalizedText;
  tags: string[];
  imageUrl: string;
  url?: string;
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
              <Highlighter backgroundColor={"#61DAFB"}>
                React Native
              </Highlighter>
              for both Android and iOS.
            </li>
            <li>
              Independently set up
              <Highlighter backgroundColor={"#F59E0B"}>CI/CD</Highlighter>
              pipelines and handled Apple Store submission.
            </li>
            <li>
              Integrated
              <Highlighter backgroundColor={"#FCD34D"}>
                Firebase FCM
              </Highlighter>
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
              <Highlighter backgroundColor={"#61DAFB"}>
                React Native
              </Highlighter>
              開發 Android / iOS 雙平台 App。
            </li>
            <li>
              獨立建置
              <Highlighter backgroundColor={"#F59E0B"}>CI/CD</Highlighter>
              流程並完成 Apple Store 上架。
            </li>
            <li>
              串接
              <Highlighter backgroundColor={"#FCD34D"}>
                Firebase FCM
              </Highlighter>
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
    url: "https://www.artifactdev.tw/",
  },
  {
    title: {
      en: "Pet Health App",
      zh: "寵物健康追蹤 App",
    },
    description: {
      en: () => (
        <>
          <p>
            A mobile health tracking app for pets, helping owners monitor
            breathing rate and wellness via camera input and simple health logs.
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>Built with React Native for Android and iOS compatibility.</li>
            <li>
              Integrated camera to detect pet chest movement for respiration
              tracking.
            </li>
            <li>Stored health data logs using Firebase services.</li>
            <li>
              Designed with pet-friendly UX for ease of daily use by owners.
            </li>
          </ul>
        </>
      ),
      zh: () => (
        <>
          <p>
            寵物健康 App
            協助飼主透過手機相機觀察寵物胸部起伏，自動偵測呼吸頻率並記錄健康狀況。
          </p>
          <ul style={{ paddingLeft: "1.2em", marginTop: "0.5em" }}>
            <li>使用 React Native 開發，支援 Android / iOS 雙平台。</li>
            <li>透過相機偵測寵物胸部移動，進行呼吸次數分析。</li>
            <li>結合 Firebase 儲存健康紀錄。</li>
            <li>介面簡潔直覺，方便日常使用與觀察。</li>
          </ul>
        </>
      ),
    },
    tags: ["React Native", "Firebase", "Camera"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1669083827853-de7a75b6daa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
];
