"use client";
import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import UiProvider from "__ui/Provider";
import CustomComponent from "__app/CustomComponent";
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
