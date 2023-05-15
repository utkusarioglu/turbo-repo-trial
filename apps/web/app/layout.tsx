"use client";
import "ui/src/css-reset";
import { useServerInsertedHTML } from "next/navigation";
import { type ReactNode } from "react";

import tamaguiConfig from "../tamagui.config";

/**
 * @dev
 * 1- `margin: 0` is to get rid of a bug in tamagui
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    // this first time this runs you'll get the full CSS including all themes
    // after that, it will only return CSS generated since the last call
    return (
      <html>
        <head>
          <style
            dangerouslySetInnerHTML={{
              __html: tamaguiConfig.getNewCSS(),
            }}
          />
        </head>
      </html>
    );
  });

  return (
    <html>
      {/* #1 */}
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
