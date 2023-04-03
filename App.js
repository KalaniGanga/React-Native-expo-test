import { SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import fonts from "./src/theme/font";
import { Provider } from "react-redux";
import { store } from "./src/stores/configureStore";

const App = () => {
  const [fontsLoaded] = useFonts(fonts);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
