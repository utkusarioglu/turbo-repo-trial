import UiProvider from '__ui/Provider';
import CustomComponent from '__app/CustomComponent';
import tamaguiConfig from '../tamagui.config';

const App = () => {
  const scheme = 'dark';
  return (
    <UiProvider
      config={tamaguiConfig}
      // @ts-ignore
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      disableRootThemeClass>
      <CustomComponent />
    </UiProvider>
  );
};

export default App;
