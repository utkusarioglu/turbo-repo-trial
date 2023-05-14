import UiProvider from "ui/src/Provider";
import CustomComponent from "app/src/CustomComponent";
import tamaguiConfig from "../tamagui.config";

const App = () => {
  const scheme = "dark";
  return (
    <UiProvider
      config={tamaguiConfig}
      // @ts-ignore
      disableInjectCSS
      defaultTheme={scheme === "dark" ? "dark" : "light"}
      disableRootThemeClass>
      <CustomComponent />
    </UiProvider>
  );
};

export default App;
