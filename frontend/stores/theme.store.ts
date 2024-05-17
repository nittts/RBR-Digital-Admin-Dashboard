"use client";

import { ThemeModes } from "@/@types/theme.types";
import { LSUtils } from "@/utils/localStorage";
import { ThemeConfig } from "@chakra-ui/react";
import { create } from "zustand";

type IThemeConfig = {
  config: ThemeConfig;
  updateThemeMode: (mode: ThemeModes) => void;
  updateUseSystem: (use: boolean) => void;
};

const baseThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const updateLSValue = (config: ThemeConfig) => {
  LSUtils.set(`@ADMIN_PANEL::config`, config);
  return { config };
};

const UseThemeConfigStore = create<IThemeConfig>((set) => ({
  config: LSUtils.get("@ADMIN_PANEL::config") ?? baseThemeConfig,
  updateThemeMode: (initialColorMode) => set((state) => updateLSValue({ ...state.config, initialColorMode })),
  updateUseSystem: (useSystemColorMode) => set((state) => updateLSValue({ ...state.config, useSystemColorMode })),
}));

// Variables
const useThemeMode = () => UseThemeConfigStore(({ config }) => config.initialColorMode);
const useSystem = () => UseThemeConfigStore(({ config }) => config.useSystemColorMode);
const useConfig = () => UseThemeConfigStore(({ config }) => config);

// Methods
const updateThemeMode = () => UseThemeConfigStore(({ updateThemeMode }) => updateThemeMode);
const updateUseSystem = () => UseThemeConfigStore(({ updateUseSystem }) => updateUseSystem);

export { useSystem, useThemeMode, updateThemeMode, updateUseSystem, UseThemeConfigStore, useConfig };
