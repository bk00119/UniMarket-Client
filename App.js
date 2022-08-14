import * as SplashScreen from "expo-splash-screen";
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store';

import Landing from './appRoutes/Landing';
import BottomNavigator from "./navigators/BottomNavigator";
import store from './store/store';
import AuthNavigator from "./navigators/AuthNavigator";
import { styles } from './styles';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);

  async function prepare() {
    checkLoginStatus();
    setAppIsReady(true);
  }
  async function checkLoginStatus(){
    const credential = await SecureStore.getItemAsync('loginStatus');
    if(credential){
      setLoginStatus(credential);
    }
  }

  useEffect(() => {
    if(!appIsReady){
      prepare();
      setTimeout(()=>setIsLoading(false), 1500);
    }
  }, [appIsReady]);

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
        <NavigationContainer theme={styles} >
          <SafeAreaProvider>
            {isLoading ? (
                <View 
                  onLayout={onLayoutRootView}
                  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                  <Landing />
                </View>
              ) : loginStatus ? (
                <BottomNavigator loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
              ) : (
                <AuthNavigator loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
              )
            }
          </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}