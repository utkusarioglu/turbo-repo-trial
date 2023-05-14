const path = require("path");
const getWorkspaces = require("get-yarn-workspaces");
const currDir = __dirname;
const rootDir = path.resolve(__dirname, "../..");
const appsDir = path.resolve(rootDir, "apps");
const packagesDir = path.resolve(rootDir, "packages");
const packageRepoDirs = getWorkspaces(packagesDir);
const rootNodeModulesDir = path.resolve(rootDir, "node_modules");
const blockList = ["react", "react-native"]
  .map(
    pkg =>
      // new RegExp(`${dir}/node_modules/${depName}/.*`)
      new RegExp(path.resolve("node_modules", pkg) + "/.*"),
  )
  .filter(val => val.test(new RegExp("/android/node_modules/.*")));

const extraNodeModules = {
  __app: path.resolve(packagesDir, "app"),
  __ui: path.resolve(packagesDir, "ui"),
};

console.log({
  currDir,
  rootDir,
  appsDir,
  packagesDir,
  packageRepoDirs,
  rootNodeModulesDir,
  blockList,
});

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [rootNodeModulesDir, ...packageRepoDirs],
  resolver: {
    blockList,
    extraNodeModules,
  },
};
