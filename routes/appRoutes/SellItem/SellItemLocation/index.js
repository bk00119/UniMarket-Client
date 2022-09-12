import { View } from 'react-native'

import SellItemLocationSelection from "../../../../components/SellItem/LocationSelection/mobile";
import { styles } from "./styles";

export default function SellItemLocationScreen(props) {
    return (
        <View style={styles.sellItemCategoryScreeContainer} >
            <SellItemLocationSelection />
        </View>
    );
}