import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.headerBackButtonContainer}
            onPress={()=>navigation.goBack()}
        >
            <Image
                source={require('../back.png')}
                style={styles.headerBackButton}
            />
        </TouchableOpacity>
    )
}