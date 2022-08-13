import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./headers/BottomNav.js";

import store from './store/store';
import GoogleLogin from './components/Login/GoogleLogin';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      //API calls go here 
      setAppIsReady(true)
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
        <StatusBar style="auto" animated={true} />
        <NavigationContainer onReady={onLayoutRootView}>
          <SafeAreaProvider>
            {/* <GoogleLogin /> */}
            <BottomNav/>
          </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
