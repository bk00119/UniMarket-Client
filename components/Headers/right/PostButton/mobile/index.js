import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function PostButton(props) {
    const navigation = useNavigation();
    async function backToPrevScreen(){
        await props.formRef.current.submitForm();
        // props.setRefresh(true);
        // navigation.navigate("My");
    }
    return (
        <TouchableOpacity
            style={styles.headerPostButtonContainer}
            onPress={()=>backToPrevScreen()}
        >
            <Text style={styles.headerPostButton} >Post</Text>
        </TouchableOpacity>
    )
}