import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import ItemCardImage from '../ItemCardImage/mobile';
import { styles } from './styles';

export default function ItemCard(props){
    const [isSaved, setIsSaved] = useState(false); //for the items that are saved

    return (
        <View style={styles.itemCardContainer}>
            <ItemCardImage imageSrc={props.imageSrc} />
            <View style={styles.itemCardInfoContainer}>
                <Text numberOfLines={1} style={styles.itemCardTitle}>{props.title}</Text>
                <Text numberOfLines={1} style={styles.itemCardCost}>{props.cost}</Text>
                <View style={styles.itemCardDetailContainer}>
                    <Text style={styles.itemCardLocation} numberOfLines={1} >{props.location}</Text>
                    <Text style={styles.itemCardUploadTime} numberOfLines={1} >{props.uploadTime}</Text>
                </View>
            </View>
        </View>
    );
}