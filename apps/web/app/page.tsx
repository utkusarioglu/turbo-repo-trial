"use client";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import UiProvider from "ui/src/Provider";
import CustomComponent from "app/src/CustomComponent";
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
        <CustomComponent />
      </UiProvider>
    </NextThemeProvider>
  );
}
