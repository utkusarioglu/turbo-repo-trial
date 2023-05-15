const path = require("path");
const babylon = require("@babel/parser");

const appRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, "../..");
const packagesRoot = path.resolve(workspaceRoot, "packages");

console.log({ appRoot, workspaceRoot, packagesRoot });

module.exports = {
  watchFolders: [
    appRoot,
    path.resolve(workspaceRoot, "node_modules"),
    packagesRoot,
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // transformer: {},
  // transform: file => {
  //   console.log(file);
  //   const ast = babylon.parse(file.src, { sourceType: "module" });
  //   return { ast };
  // },
  resolver: {
    // extraNodeModules: [
    //   path.resolve(appRoot, "node_modules"),
    //   path.resolve(workspaceRoot, "node_modules"),
    // ],
  },
};
