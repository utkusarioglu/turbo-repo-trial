const path = require("path");

const getWorkspaces = require("get-yarn-workspaces");
const blacklist = require("metro-config/src/defaults/exclusionList");
// const blacklist = require("metro-config/src/defaults/blacklist");
const workspaceRoot = path.resolve(__dirname, "../..");
const packagesRoot = path.resolve(workspaceRoot, "packages");
const repoRoot = __dirname;

const allWorkspaces = getWorkspaces(workspaceRoot);
const packageWorkspaces = allWorkspaces.filter(workspacePath =>
  workspacePath.includes("packages/"),
);

// const blockList = [
//   ...allWorkspaces.map(
//     workspacePath =>
//       `/${workspacePath.replace(
//         /\//g,
//         "[/\\\\]",
//       )}[/\\\\]node_modules[/\\\\]react-native[/\\\\].*/`,
//   ),
//   ...allWorkspaces.map(
//     workspacePath =>
//       `/${workspacePath.replace(
//         /\//g,
//         "[/\\\\]",
//       )}[/\\\\]node_modules[/\\\\]react[/\\\\].*/`,
//   ),
// ];

const reactNativePath = require.resolve("react-native");
const reactNativeFolder = `${
  reactNativePath.split("node_modules/react-native/")[0]
}node_modules/react-native/`;

const blockList = packageWorkspaces.map(
  workspacePath => new RegExp(`${workspacePath}/node_modules/react-native`),
);

console.log({ allWorkspaces, packageWorkspaces, packagesRoot, blockList });

module.exports = {
  watchFolders: [
    path.resolve(repoRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
    ...packageWorkspaces.map(packagePath => path.resolve(packagePath)),
  ],

  resolver: {
    // blockList: blacklist(blockList),
    blockList,
    extraNodeModules: {
      react: path.resolve(workspaceRoot, "node_modules/react"),
      "react-native": path.resolve(repoRoot, "node_modules/react-native"),
      // "react-dom": path.resolve(workspaceRoot, "node_modules/react-dom"),
      // "@babel/runtime": path.resolve(repoRoot, "node_modules/@babel/runtime"),
      // react: path.resolve(repoRoot, "node_modules/react"),
      // tamagui: path.resolve(workspaceRoot, "node_modules/tamagui"),
      // ui: path.resolve(packagesRoot, "ui"),
      // app: path.resolve(packagesRoot, "app"), ,
    },
  },
  // resolver: {
  //   blacklistRE: new RegExp(
  //     `^((?!${reactNativeFolder.replace(
  //       "/",
  //       "\\/",
  //     )}).)*\\/node_modules\\/react-native\\/.*$`,
  //   ),
  // },
};
