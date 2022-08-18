import { SafeAreaView } from 'react-native';

import ItemResult from '../../../../components/Item/ItemResult/mobile';
import { styles } from "./styles";

export default function CategoryItemResultScreen(props){
    const category = props.route.params.category;

    return (
        <SafeAreaView style={styles.categoryItemResultScreenContainer}>
            <ItemResult itemResultHeaderType='categories' category={category} setCategory={props.setCategory} />
        </SafeAreaView>
    );
}