import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Button } from "@radix-ui/themes";
import { useLanguage } from "./LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle: React.FC = () => {
  const { setLanguage } = useLanguage();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Box
          style={{
            position: "absolute",
            top: "1em",
            right: "1em",
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
          padding: "8px",
          background: "#fff",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 100,
        }}
      >
        <DropdownMenu.Item asChild onSelect={() => setLanguage("en")}>
          <Button
            variant="ghost"
            style={{ width: "100%", justifyContent: "flex-start" }}
          >
            English
          </Button>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild onSelect={() => setLanguage("zh")}>
          <Button
            variant="ghost"
            style={{ width: "100%", justifyContent: "flex-start" }}
          >
            繁體中文
          </Button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LanguageToggle;
