import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

export default function Options(props){
    function showOptions(){
        console.log("SHOW OPTIONS");
    }
    
    return (
        <View style={styles.headerOptionsContainer}>
            <Ionicons name="ellipsis-vertical-outline" size={32} color="black" onPress={()=>showOptions()} />
        </View>
    );
}