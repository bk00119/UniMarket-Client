import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Button } from "react-native";

import HomeScreen from "./appRoutes/Home/HomeScreen";
import CategoriesScreen from "./appRoutes/Categories/CategoriesScreen";
import SellItemScreen from "./appRoutes/SellItem/SellItemScreen";
import ChatScreen from "./appRoutes/Chat/ChatScreen";
import ProfileScreen from "./appRoutes/Profile/ProfileScreen";

export default function BottomNavigator(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="Profile" //CHANGE THIS LATER
      screenOptions={{
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          }
        },
        headerTitleStyle: {
          fontSize: 25,
          marginLeft: 10
        },
        headerTitleAlign: 'left'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerLeft: () => (
          //   <Button
          //     onPress={() => setRegisterStatus(false)}
          //     title="Back"
          //     buttonStyle={{backgroundColor:'#FFF', marginLeft: 10}}
          //     titleStyle={{color: '#000'}}
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      <Tab.Screen
        name="Post"
        component={SellItemScreen}
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