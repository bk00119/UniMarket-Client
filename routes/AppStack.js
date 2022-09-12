import { createStackNavigator } from '@react-navigation/stack';


import ItemScreen from "./appRoutes/Item/ItemScreen";
import CategoryItemResultScreen from './appRoutes/Categories/CategoryItemResult/CategoryItemScreen';
import BottomNavigator from "./BottomNavigator";
import ShareAndOptions from "../components/Headers/right/ShareAndOptions/mobile";
import SellItemCategoryScreen from "./appRoutes/SellItem/SellItemCategory";
import SellItemLocationScreen from "./appRoutes/SellItem/SellItemLocation";

export default function AppStack(props){
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator
            backBehavior="history"
            initialRouteName="BottomNavigator" //CHANGE THIS LATER
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="BottomNavigator" 
                children={()=><BottomNavigator loginStatus={props.loginStatus} setLoginStatus={props.setLoginStatus}/>}
                options={{
                    header: ()=>null
                }}
            />
            <Stack.Screen 
                name="ItemScreen" 
                component={ItemScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerStyle: { height: 110 },
                    headerLeftLabelVisible: false,
                    headerLeftContainerStyle: { paddingLeft: 10, color: 'black' },
                    headerRight: () => (
                        <ShareAndOptions />
                    ),
                }}
            />
            <Stack.Screen 
                name="CategoryItemScreen" 
                component={CategoryItemResultScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerStyle: { height: 110 },
                    headerLeftLabelVisible: false,
                    headerLeftContainerStyle: { paddingLeft: 10, color: 'black' },
                    headerRight: () => (
                        <ShareAndOptions />
                    ),
                }}
            />
            <Stack.Screen 
                name="SellItemCategoryScreen" 
                component={SellItemCategoryScreen}
                options={{
                    headerTitle: 'Choose Category',
                    headerShown: true,
                    headerStyle: { height: 110 },
                    headerLeftLabelVisible: false,
                    headerLeftContainerStyle: { paddingLeft: 10, color: 'black' },
                }}
            />
            <Stack.Screen 
                name="SellItemLocationScreen" 
                component={SellItemLocationScreen}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    headerStyle: { height: 110 },
                    headerLeftLabelVisible: false,
                    headerLeftContainerStyle: { paddingLeft: 10, color: 'black' },
                }}
            />
        </Stack.Navigator>
    ); 
}