import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function ResetCategoryButton(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.headerResetCategoryButtonContainer}
            // onPress={()=>navigation.goBack()}
            onPress={()=>props.setCategory(null)}
        >
            <Image
                source={require('../back.png')}
                style={styles.headerResetCategoryButton}
            />
        </TouchableOpacity>
    )
}