import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./Theme/theme.js";

const rootElement = document.getElementById("root");
console.log({ rootElement });
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
