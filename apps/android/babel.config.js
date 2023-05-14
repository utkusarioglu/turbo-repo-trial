// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

const path = require("path");

process.env.TAMAGUI_TARGET = "native";

const appRoot = __dirname;

const alias = {
  "^react$": require.resolve("react", {
    paths: [path.join(appRoot, "./")],
  }),
  "^react-native$": require.resolve(`react-native`, {
    paths: [path.join(__dirname, "./")],
  }),
  "^react-native/(.+)": ([, name]) =>
    require.resolve(`react-native/${name}`, {
      paths: [path.join(__dirname, "./")],
    }),
  // "react-native-svg": require.resolve("react-native-svg", {
  //   paths: [path.join(__dirname, "./")],
  // }),
};

console.log("babel!!!------------------------!", { appRoot, alias });

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    // "tsconfig-paths-module-resolver",
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
