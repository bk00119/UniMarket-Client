import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import location_list from "../nyu_location.json";
import { styles } from "./styles";

export default function SellItemLocationSelection() {
    const navigation = useNavigation();

function locationSelect(location){
        navigation.navigate('Sell', { location: location });
    }

    return (
        <ScrollView style={styles.sellItemLocationListContainer}>
            {location_list.map((location) => (
                <TouchableOpacity 
                    key={location} 
                    style={styles.sellItemLocationListTextContainer}
                    activeOpacity={1}
                    onPress={()=>locationSelect(location)}
                >
                    <Text style={styles.sellItemLocationListText}>
                        {location}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};