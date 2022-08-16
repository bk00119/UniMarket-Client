import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'

import ItemResult from '../../../components/Item/ItemResult/mobile';
import category_list from './categories.json';
import { styles } from './styles';

export default function CategoriesScreen(props) {
    const [category, setCategory] =  useState(null);

    return (
        <View style={styles.categoriesScreenContainer}>
            { category==null ? (
                <View style={styles.categoriesContainer}>
                    { category_list.map((category, index)=> (
                        <View style={styles.categoryContainer} key={index}>
                            <View style={styles.categoryInnerContainer} >
                                <TouchableOpacity 
                                    style={styles.categoryImage}
                                    onPress={()=>setCategory(category.name)}
                                >
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.categoryName}>{category.name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <ItemResult itemResultHeaderType='categories' category={category} setCategory={setCategory} />
            )}
        </View>
    );
}