import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

export default function SearchAndNotification(props){
    const navigation = useNavigation();
    
    return (
        <View style={styles.headerSearchAndNotificationContainer}>
            <Ionicons name="search" size={32} color="black" onPress={()=>navigation.navigate('Search')} />
            <Ionicons name="notifications-outline" size={32} color="black" onPress={()=>navigation.navigate('Notification')} />
        </View>
    );
}