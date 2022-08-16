import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./appRoutes/Home/HomeScreen";
import CategoriesScreen from "./appRoutes/Categories/CategoriesScreen";
import SellItemScreen from "./appRoutes/SellItem/SellItemScreen";
import ChatScreen from "./appRoutes/Chat/ChatScreen";
import ProfileScreen from "./appRoutes/Profile/ProfileScreen";
import SearchAndNotification from "../components/Headers/right/SearchAndNotification/mobile";
import NotificationAndSettings from "../components/Headers/right/NotificationAndSettings/mobile";
import Options from "../components/Headers/right/Options/mobile";

export default function BottomNavigator(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        headerTitleStyle: {
          fontSize: 28,
          marginLeft: 10,
        },
        headerTitleAlign: 'left'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <SearchAndNotification />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerRight: () => (
            <SearchAndNotification />
          ),
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SellItemScreen}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerRight: () => (
            <Options />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        children={()=><ProfileScreen loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus}/>}
        options={{
          headerRight: () => (
            <NotificationAndSettings />
          ),
        }}
      />
    </Tab.Navigator>
  );
}