import { View } from 'react-native';
import { Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

export default function ItemResultHomeHeader(props){
    return (
        <View style={styles.itemResultHomeHeaderContainer}>
            <View style={styles.itemResultHomeHeaderSelectionContainer}>
                <Button
                    title="All"
                    buttonStyle={props.selection == 0 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>props.setSelection(0)}
                />
                <Button
                    title="Recommended"
                    buttonStyle={props.selection == 1 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>props.setSelection(1)}
                />
                <Button
                    title="Trending"
                    buttonStyle={props.selection == 2 ? styles.itemResultHomeSelectionButtonUnderlined : styles.itemResultHomeHeaderSelectionButton}
                    titleStyle={styles.itemResultHomeSelectionButtonTitle}
                    onPress={()=>props.setSelection(2)}
                />
            </View>
            <Ionicons style={styles.itemResultFilterButton}name="filter-outline" size={32} color="black" onPress={()=>console.log('SHOW FILTER')} />
        </View>
    );
}