"use client";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import UiProvider from "ui/src/Provider";
import HomeScreen from "app/src/screens/Home.screen";
import tamaguiConfig from "../tamagui.config";

export default function Page() {
  const [theme, setTheme] = useRootTheme();
  return (
    <NextThemeProvider>
      <UiProvider
        config={tamaguiConfig}
        // @ts-ignore
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={theme}
      >
        <HomeScreen />
      </UiProvider>
    </NextThemeProvider>
  );
}
