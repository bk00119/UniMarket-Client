import { View } from 'react-native';
import { Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

export default function ItemResultHomeHeader(props){
    function tabSelect(sortType){
        props.setSortType(sortType);
        props.setIsRefreshing(true);
    }
    return (
        <View style={styles.itemResultHomeHeaderContainer}>
            <View style={styles.itemResultHomeHeaderSelectionContainer}>
                <Button
                    title="All"
                    buttonStyle={props.sortType == 0 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>tabSelect(0)} //latest
                />
                <Button
                    title="Recommended"
                    buttonStyle={props.sortType == 1 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>tabSelect(1)}
                />
                <Button
                    title="Trending"
                    buttonStyle={props.sortType == 4 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>tabSelect(4)} //most popular
                />
            </View>
            <Ionicons style={styles.itemResultFilterButton}name="filter-outline" size={32} color="black" onPress={()=>console.log('SHOW FILTER')} />
        </View>
    );
}