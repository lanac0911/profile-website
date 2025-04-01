import { Flex } from "@radix-ui/themes";
import Home from "@page/Home";
import { LanguageProvider } from "@component/Language/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Flex width="100vw" align="center">
        <Home />
      </Flex>{" "}
    </LanguageProvider>
  );
}

export default App;
