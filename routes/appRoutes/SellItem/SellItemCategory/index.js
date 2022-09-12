import { View } from 'react-native'

import SellItemCategoryList from "../../../../components/SellItem/CategoryList/mobile";
import { styles } from "./styles";

export default function SellItemCategoryScreen(props) {
    return (
        <View style={styles.sellItemCategoryScreeContainer} >
            <SellItemCategoryList />
        </View>
    );
}