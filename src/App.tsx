import { Flex } from "@radix-ui/themes";
import Home from "@page/Home";
import { LanguageProvider } from "@component/Language/LanguageContext";
import { useEffect } from "react";

function App() {
  // 在 App.tsx 或 index.tsx 中
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <LanguageProvider>
      <Flex
        // width="100vw"
        overflow="hidden"
        align="center"
        style={{
          height: "100dvh",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        <Home />
      </Flex>
    </LanguageProvider>
  );
}

export default App;
