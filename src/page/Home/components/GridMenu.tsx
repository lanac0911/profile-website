import React from "react";
import { Text, Grid, IconButton } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import WindowSection from "@/components/WindowSection";

// 引入各個頁面組件
import AboutPage from "@page/About";
import TechStackPage from "@page/Tech";
import ProjectsPage from "@page/Project";
import ContactPage from "@page/Contact";
import {
  ContactRound,
  FolderCode,
  PencilRuler,
  MailQuestion,
  X,
} from "lucide-react";

const GridMenu = () => {
  const menunItem = [
    { title: "AB", fullName: "ABOUT.ME", name: "ABOUT", icon: ContactRound },
    {
      title: "TE",
      fullName: "TECHs.STACK",
      name: "TECHs",
      icon: PencilRuler,
    },
    {
      title: "PJ",
      fullName: "MY.PROJECTs",
      name: "PROJECTs",
      icon: FolderCode,
    },
    {
      title: "CT",
      fullName: "CONTACT.ME",
      name: "CONTACT",
      icon: MailQuestion,
    },
  ];

  // 建立選單名稱與頁面組件的對應關係
  const pageComponents: { [key: string]: React.ComponentType } = {
    ABOUT: AboutPage,
    TECHs: TechStackPage,
    PROJECTs: ProjectsPage,
    CONTACT: ContactPage,
  };

  return (
    <>
      <Grid
        columns={{ initial: "2", xs: "2", sm: "4", lg: "4" }}
        gap="4"
        style={{
          bottom: 0,
          position: "relative",
        }}
      >
        {menunItem.map((menu, idx) => {
          const PageComponent = pageComponents[menu.name];
          return (
            <Dialog.Root key={idx}>
              <Dialog.Trigger asChild>
                <div className="grid-menu-item">
                  {/* 背景 overlay */}
                  <div className="overlay"></div>
                  <WindowSection
                    hoverEffect={true}
                    hoverContent={<menu.icon className="icon-large" />}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Text
                      as="div"
                      size={{ initial: "6", xs: "8" }}
                      align="center"
                      weight="bold"
                      style={{ color: "#FFF" }}
                    >
                      {menu.title}
                    </Text>
                    <Text
                      as="div"
                      size="1"
                      style={{ fontSize: ".6em", color: "#FFF" }}
                    >
                      {menu.fullName}
                    </Text>
                  </WindowSection>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay style={dialogOverlayStyles} />
                <Dialog.Content
                  className="dialog-window"
                  style={dialogContentStyles}
                >
                  <div className="dialog-header">
                    <div className="header-dots">
                      {/* 使用 Dialog.Close 作為關閉按鈕 */}
                      <Dialog.Close asChild>
                        <IconButton
                          variant="soft"
                          style={{
                            width: "1em",
                            height: "1em",
                            backgroundColor: "#FF5F57",
                            borderRadius: 100,
                            padding: "0.1em",
                          }}
                        >
                          <X width="0.9em" height="0.9em" color="#69110A" />
                        </IconButton>
                      </Dialog.Close>
                      <IconButton
                        variant="soft"
                        style={{
                          width: "1em",
                          height: "1em",
                          backgroundColor: "#FFBD2E",
                          borderRadius: 100,
                        }}
                      />
                      <IconButton
                        variant="soft"
                        style={{
                          width: "1em",
                          height: "1em",
                          backgroundColor: "#28C940",
                          borderRadius: 100,
                        }}
                      />
                    </div>
                  </div>
                  <Dialog.Description
                    style={{
                      padding: "0.5em",
                      paddingRight: "1.5em",
                      paddingLeft: "1.5em",
                    }}
                  >
                    <PageComponent />
                  </Dialog.Description>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          );
        })}
      </Grid>
      {/* CSS */}
      <style>
        {`
          /* Grid Menu 項目 */
          .grid-menu-item {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-out;
          }
          .overlay {
            position: absolute;
            top: 40px;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s ease-out, height 0.3s ease-out;
            z-index: 0;
          }
          .grid-menu-item:hover .overlay {
            width: 200%;
            height: 200%;
          }
          .menu-content {
            position: relative;
            z-index: 1;
          }
          .icon-large {
            width: 2.7em;
            height: 2.7em;
          }
          /* Dialog 視窗 */
          .dialog-window {
            background: #fff;
            border-radius: 8px;
            padding: 0;
            position: fixed;
            top: 5%;
            left: 5%;
            width: 90vw;
            height: 90vh;
            overflow: auto;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            animation: scaleUp 0.2s ease-out forwards;
          }
          .dialog-window[data-state="closed"] {
            animation: scaleDown 0.3s ease-out forwards;
          }
          @keyframes scaleUp {
            0% { transform: scale(0.3); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes scaleDown {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0.3); opacity: 0; }
          }
          /* Dialog Header */
          .dialog-header {
            padding: 8px;
            background: #f5f5f5;
            border-bottom: 0.5px solid #f5f5f5;
            display: flex;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1;
          }
          .header-dots {
            display: flex;
            gap: 5px;
            margin: 0 5px;
          }
          .header-dots .close-button {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: none;
            background: #FF5F57;
            color: #fff;
            font-size: 10px;
            line-height: 14px;
            text-align: center;
            cursor: pointer;
          }
          .header-dots .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            display: inline-block;
          }
          .header-dots .dot.yellow {
            background: #FFBD2E;
          }
          .header-dots .dot.green {
            background: #28C940;
          }
          /* Dialog Body */
          .dialog-body {
            padding: 1em;
          }
        `}
      </style>
    </>
  );
};

const dialogOverlayStyles: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
};

const dialogContentStyles: React.CSSProperties = {
  // 此處樣式已在 .dialog-window class 中定義
};

export default GridMenu;
