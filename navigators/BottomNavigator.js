import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";

import HomeScreen from "../appRoutes/Home/HomeScreen";
import CategoriesScreen from "../appRoutes/Categories/CategoriesScreen";
import PostScreen from "../appRoutes/Post/PostScreen";
import ChatScreen from "../appRoutes/Chat/ChatScreen";
import ProfileScreen from "../appRoutes/Profile/ProfileScreen";

export default function BottomNavigator(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Profile" //CHANGE THIS LATER
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
      />
        <Tab.Screen
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        name="Profile"
        children={()=><ProfileScreen loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus}/>}
      />
    </Tab.Navigator>
  );
}
