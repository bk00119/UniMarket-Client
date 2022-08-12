import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens for each nav button 
import HomeScreen from "../screens/Home/HomeScreen";
import MarketScreen from "../screens/Market/MarketScreen";
import PostScreen from "../screens/Post/PostScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";




export default function BottomNav() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="UniMarket"
        component={MarketScreen}
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
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
