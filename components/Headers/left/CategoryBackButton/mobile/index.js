import { TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function CategoryBackButton(props) {
    // const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.headerBackButtonContain}
            // onPress={()=>navigation.navigate('Categories')}
            onPress={()=>props.setCategory(null)}
        >
            <Image
                source={require('../back.png')}
                style={styles.headerBackButton}
            />
        </TouchableOpacity>
    )
}