import { View } from 'react-native';
import { Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

export default function ItemResultCategoriesHeader(props){
    return (
        <View style={styles.itemResultCategoriesHeaderContainer}>
            <Button 
                title={props.category}
                buttonStyle={styles.itemResultHomeHeaderSelectionButton}
                titleStyle={styles.itemResultCategoriesHeaderButtonTitle}
                // onPress={()=>props.setCategory(null)}
            />
            <Ionicons style={styles.itemResultFilterButton}name="filter-outline" size={32} color="black" onPress={()=>console.log('SHOW FILTER')} />
        </View>
    );
}