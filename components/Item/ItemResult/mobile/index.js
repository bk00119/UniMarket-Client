import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import ItemCard from '../ItemCard/mobile';
import { styles } from './styles';

export default function ItemResult(props){
    const [selection, setSelection] = useState(0);
    // const [itemList, setItemList] = useState([]);
    const [itemList, setItemList] = useState([
        {
            "title": "ECON-UA 323 TEXTBOOK",
            "imageSrc": "",
            "cost": "$36",
            "location": "Palladium Hall",
            "uploadTime": "5 hours ago"
        },
        {
            "title": "IKEA Mini Fridge",
            "imageSrc": "",
            "cost": "$80",
            "location": "Weinstein Hall",
            "uploadTime": "2 days ago"
        },
        {
            "title": "NYU Leggings",
            "imageSrc": "",
            "cost": "$20",
            "location": "Bobst Library",
            "uploadTime": "1 week ago"
        },
        {
            "title": "Jacquemus Hat",
            "imageSrc": "",
            "cost": "$75",
            "location": "University Hall",
            "uploadTime": "2 hours ago"
        },
        {
            "title": "Hodu's Favorite Toy",
            "imageSrc": "",
            "cost": "$100,000",
            "location": "Tandon",
            "uploadTime": "5 minutes ago"
        },
    ]); //REMOVE THIS LATER

    useEffect(()=>{
        // API Request for Item Results
    },[selection]);

    return(
        <View style={styles.itemResultContainer}>
            <View style={styles.itemResultHeaderContainer}>
                <View style={styles.itemResultHeaderSelectionContainer}>
                    <Button
                        title="All"
                        buttonStyle={selection == 0 ? styles.itemResultSelectionButtonUnderlined : styles.itemResultHeaderSelectionButton}
                        titleStyle={styles.homeScreenSelectionButtonTitle}
                        onPress={()=>setSelection(0)}
                    />
                    <Button
                        title="Recommended"
                        buttonStyle={selection == 1 ? styles.itemResultSelectionButtonUnderlined : styles.itemResultHeaderSelectionButton}
                        titleStyle={styles.homeScreenSelectionButtonTitle}
                        onPress={()=>setSelection(1)}
                    />
                    <Button
                        title="Trending"
                        buttonStyle={selection == 2 ? styles.itemResultSelectionButtonUnderlined : styles.itemResultHeaderSelectionButton}
                        titleStyle={styles.homeScreenSelectionButtonTitle}
                        onPress={()=>setSelection(2)}
                    />
                </View>
                <Ionicons style={styles.itemResultFilterButton}name="filter-outline" size={32} color="black" onPress={()=>console.log('SHOW FILTER')} />
            </View>
            <View style={styles.itemResultItemCardsContainer}>
                { itemList.map((item, index)=> (
                    <View style={styles.itemResultItemCardContainer}>
                        <ItemCard key={index} {...item} />
                    </View>
                ))}
            </View>
        </View>
    );
}