import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, ScrollView } from 'react-native';

import category_list from "../category.json";
import { styles } from "./styles";

export default function SellItemCategoryList() {
    const navigation = useNavigation();

    function categorySelect(category){
        navigation.navigate('Sell', { category: category });
    }

    return (
        <ScrollView style={styles.sellItemCategoryListContainer}>
            {category_list.map((category) => (
                <TouchableOpacity 
                    key={category} 
                    style={styles.sellItemCategoryListTextContainer}
                    activeOpacity={1}
                    onPress={()=>categorySelect(category)}
                >
                    <Text style={styles.sellItemCategoryListText}>
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};