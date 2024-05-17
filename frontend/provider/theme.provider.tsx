"use client";

import { ProviderProps } from "@/@types/providers.types";
import { useConfig } from "@/stores/theme.store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function ThemeProvider({ children }: ProviderProps) {
  const config = useConfig();

  const theme = extendTheme({ config });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
