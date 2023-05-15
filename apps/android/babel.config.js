const path = require("path");

process.env.TAMAGUI_TARGET = "native";

const alias = {
  react: require.resolve("react", {
    paths: [path.join(__dirname, "./")],
  }),
  "^react/(.+)": ([, name]) =>
    require.resolve(`react/${name}`, {
      paths: [path.join(__dirname, "./")],
    }),
  "^react-native$": require.resolve("react-native", {
    paths: [path.join(__dirname, "./")],
  }),
  "^react-native/(.+)": ([, name]) =>
    require.resolve(`react-native/${name}`, {
      paths: [path.join(__dirname, "./")],
    }),
};

console.log("Cleaned up 2", { alias });

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    // "tsconfig-paths-module-resolver",
    // [
    //   "module-resolver",
    //   {
    //     root: ["."],
    //     alias,
    //     extensions: [
    //       ".ios.js",
    //       ".ios.ts",
    //       ".ios.tsx",
    //       ".android.js",
    //       ".android.ts",
    //       ".android.tsx",
    //       ".native.js",
    //       ".native.ts",
    //       ".native.tsx",
    //       ".js",
    //       ".ts",
    //       ".tsx",
    //     ],
    //   },
    // ],
    [
      "@tamagui/babel-plugin",
      {
        components: ["tamagui"],
        config: "./tamagui.config.ts",
        importsWhitelist: ["constants.js", "colors.js"],
        logTimings: true,
        disableExtraction: process.env.NODE_ENV === "development",
      },
    ],
    // be sure to set TAMAGUI_TARGET
    [
      "transform-inline-environment-variables",
      {
        include: "TAMAGUI_TARGET",
      },
    ],
  ],
};
