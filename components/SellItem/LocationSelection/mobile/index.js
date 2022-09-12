import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

// import category_list from "../category.json";
import { styles } from "./styles";

export default function SellItemLocationSelection() {
    const navigation = useNavigation();

    // function categorySelect(category){
    //     navigation.navigate('Sell', { category: category });
    // }

    return (
        <ScrollView style={styles.sellItemCategoryListContainer}>
        </ScrollView>
    );
};