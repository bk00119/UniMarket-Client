import {View} from 'react-native'

import ItemResult from '../../../components/Item/ItemResult/mobile';
import { styles } from './styles';

export default function HomeScreen() {
    return (
        <View style={styles.homeScreenContainer}>
            <ItemResult itemResultHeaderType='home' />
        </View>
    );
}