import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Button } from "@radix-ui/themes";
import { useLanguage } from "./LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <DropdownMenu.Root >
        <DropdownMenu.Trigger asChild>
          <Box
            style={{
              position: "absolute",
              cursor: "pointer",
              right: "1em",
              zIndex:100
            }}
            aria-label="Toggle language"
          >
            <Languages />
          </Box>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          style={{
            minWidth: "120px",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          <DropdownMenu.Item
            className="dropdown-item"
            style={{
              width: "100%",
              justifyContent: "flex-start",
              backgroundColor: language === "en" ? "#DBEAFE" : "transparent",
              color: language === "en" ? "#1D4ED8" : "black",
              fontWeight: language === 'en' ? 900 : 300
            }}
            asChild
            onSelect={() => setLanguage("en")}
          >
            <Button>English</Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="dropdown-item"
            asChild
            onSelect={() => setLanguage("zh")}
          >
            <Button
              style={{
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor: language === "zh" ? "#DBEAFE" : "transparent",
                color: language === "zh" ? "#1D4ED8" : "black",
                fontWeight: language === 'zh' ? 900 : 300
              }}
            >
              繁體中文
            </Button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <style>
        {`
          .dropdown-item{
              padding: 5px 10px
          }
          .dropdown-item:hover {
            background-color: #f0f0f0 !important;
            color: '#111827';
            border-radius: 5px;

          }
        `}
      </style>
    </>
  );
};

export default LanguageToggle;
