import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";

export default function ShareAndOptions(props){    
    function shareItem(){
        console.log("SHARE THIS ITEM");
    }
    
    function showOptions(){
        console.log("SHOW OPTIONS");
    }
    
    return (
        <View style={styles.headerShareAndOptionsContainer}>
            <Ionicons name="share-outline" size={32} color="black" onPress={()=>shareItem()} />
            <Ionicons name="ellipsis-vertical-outline" size={32} color="black" onPress={()=>showOptions()} />
        </View>
    );
}