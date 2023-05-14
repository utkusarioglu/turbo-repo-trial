// import { withTamagui } from "@tamagui/next-plugin";
const { withTamagui } = require("@tamagui/next-plugin");

module.exports = function (name, { defaultConfig }) {
  const nextConfig = {
    ...defaultConfig,
    reactStrictMode: true,
    transpilePackages: ["__ui"],
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui", "__ui"],
    // Experimentally opt into react-native-web-lite which drops support for all react-native
    // built-in List components and removes many deprecated APIs for code-reduction, slimming
    // bundle sizes down nearly 30-50Kb.
    useReactNativeWebLite: true,

    // // disable static extraction, faster to iterate in dev mode (default false)
    // disableExtraction: process.env.NODE_ENV === "development",
  });

  return {
    ...nextConfig,
    ...tamaguiPlugin(nextConfig),
  };
};
