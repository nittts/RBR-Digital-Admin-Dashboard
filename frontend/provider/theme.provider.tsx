"use client";

import { ProviderProps } from "@/@types/providers.types";
import { ChakraProvider, Theme, ThemeConfig, extendTheme, theme, useColorMode } from "@chakra-ui/react";

export default function ThemeProvider({ children }: ProviderProps) {
  const colorMode = useColorMode();

  const styles = { global: {} };

  if (colorMode.colorMode === "light") {
    styles.global = { body: { bg: "gray.300" } };
  }

  const customizedTheme = extendTheme({ styles });

  return (
    <ChakraProvider theme={customizedTheme} portalZIndex={40}>
      {children}
    </ChakraProvider>
  );
}
