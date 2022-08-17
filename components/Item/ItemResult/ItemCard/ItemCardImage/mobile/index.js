import { View, Image } from 'react-native';

import { styles } from './styles';

export default function ItemCardImage(props){
    //NEED TO LOAD FAVORITES FROM USER DATA, API REQUEST FROM ITEM RESULT? OR LOAD FROM LOCAL STORAGE??
    return (
        <View style={styles.itemCardImageContainer}>
            <Image
                style={styles.itemCardImage}
                source={{ uri: props.images[0] }}
            />
            {/* Heart Icon */}
        </View>
    );
}