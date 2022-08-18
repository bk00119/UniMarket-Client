import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import ItemResult from '../../../components/Item/ItemResult/mobile';
import category_list from './categories.json';
import { styles } from './styles';

export default function CategoriesScreen() {
    const [categoryType, setCategoryType] =  useState(null);

    const navigation = useNavigation();
    function categoryScreenNavigate(category){
        navigation.navigate("CategoryItemScreen", {
            category: category
        });
    }

    return (
        <View style={styles.categoriesScreenContainer}>
            { categoryType==null ? (
                <View style={styles.categoriesContainer}>
                    { category_list.map((category, index)=> (
                        <View style={styles.categoryContainer} key={index}>
                            <View style={styles.categoryInnerContainer} >
                                <TouchableOpacity 
                                    style={styles.categoryImage}
                                    onPress={()=>categoryScreenNavigate(category.name)}
                                >
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.categoryName}>{category.name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <ItemResult itemResultHeaderType='categories' category={categoryType} setCategory={setCategoryType} />
            )}
        </View>
    );
}