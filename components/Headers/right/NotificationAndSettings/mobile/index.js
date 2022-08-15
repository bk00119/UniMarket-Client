import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

export default function NotificationAndSettings(props){
    const navigation = useNavigation();
    
    return (
        <View style={styles.headerNotificationAndSettingsContainer}>
            <Ionicons name="notifications-outline" size={32} color="black" onPress={()=>navigation.navigate('Notification')} />
            <Ionicons name="cog-outline" size={32} color="black" onPress={()=>navigation.navigate('Settings')} />
        </View>
    );
}