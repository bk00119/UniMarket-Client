import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function CloseButton(props) {
    const navigation = useNavigation();
    function backToPrevScreen(){
        props.setRefresh(true);
        navigation.goBack();
    }
    return (
        <TouchableOpacity
            style={styles.headerCloseButtonContainer}
            onPress={()=>backToPrevScreen()}
        >
            <Image
                source={require('../close.png')}
                style={styles.headerCloseButton}
            />
        </TouchableOpacity>
    )
}