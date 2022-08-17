import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

import ItemCardImage from '../ItemCardImage/mobile';
import { styles } from './styles';
import { dateDiffInSting } from "../../../date_difference";

export default function ItemCard(props){
    const [isSaved, setIsSaved] = useState(false); //for the items that are saved
    const currDate = new Date();
    const postDate = new Date(props.uploadTime);

    return (
        <View style={styles.itemCardContainer}>
            <ItemCardImage images={props.images} />
            <View style={styles.itemCardInfoContainer} >
                <Text numberOfLines={1} style={styles.itemCardTitle}>{props.title}</Text>
                <Text numberOfLines={1} style={styles.itemCardCost}>${(props.cost/100)}</Text>
                <View style={styles.itemCardDetailContainer}>
                    <Text style={styles.itemCardLocation} numberOfLines={1} >{props.location}</Text>
                    <Text style={styles.itemCardUploadTime} numberOfLines={1} >{dateDiffInSting(currDate, postDate)}</Text>
                </View>
            </View>  
        </View>
    );
}