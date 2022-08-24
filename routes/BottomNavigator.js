import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useRef } from 'react';

import HomeScreen from "./appRoutes/Home/HomeScreen";
import CategoriesScreen from "./appRoutes/Categories/CategoriesScreen";
import SellItemScreen from "./appRoutes/SellItem/SellItemScreen";
import ChatScreen from "./appRoutes/Chat/ChatScreen";
import ProfileScreen from "./appRoutes/Profile/ProfileScreen";
import SearchAndNotification from "../components/Headers/right/SearchAndNotification/mobile";
import NotificationAndSettings from "../components/Headers/right/NotificationAndSettings/mobile";
import Options from "../components/Headers/right/Options/mobile";
// import BackButton from "../components/Headers/left/BackButton/mobile";
import CloseButton from "../components/Headers/left/CloseButton/mobile";
import PostButton from "../components/Headers/right/PostButton/mobile";

export default function BottomNavigator(props) {
  const Tab = createBottomTabNavigator();
  const [refresh, setRefresh] = useState(true);

  var formRef = useRef();
  
  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={{
        // headerStyle: {
        //   shadowRadius: 0,
        //   shadowOffset: {
        //     height: 0,
        //   }
        // },
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
        children={()=><CategoriesScreen />}
        options={{
          headerRight: () => (
            <SearchAndNotification />
          )
        }}
      />
      <Tab.Screen
        name="Sell"
        // component={SellItemScreen}
        children={()=><SellItemScreen formRef={formRef} refresh={refresh} setRefresh={setRefresh} />}
        options={{
          tabBarStyle: { display : "none" },
          headerTitle: '',
          headerShown: true,
          headerStyle: { height: 110 },
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            }
          },
          headerLeft: () => (
            <CloseButton setRefresh={setRefresh} />
          ),
          headerRight: () => (
            <PostButton formRef={formRef} setRefresh={setRefresh} />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerRight: () => (
            <Options />
          )
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