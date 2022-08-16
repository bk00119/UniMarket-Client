import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import ItemResultHomeHeader from '../ItemResultHeaders/ItemResultHomeHeader/mobile';
import ItemResultCategoriesHeader from '../ItemResultHeaders/ItemResultCategoriesHeader/mobile';
import ItemCard from '../ItemCard/mobile';
import { styles } from './styles';

export default function ItemResult(props){
    const navigation = useNavigation();
    const [selection, setSelection] = useState(0);
    // const [itemList, setItemList] = useState([]); //with API Request
    const [itemList, setItemList] = useState([
        {
            "_id": "1",
            "title": "ECON-UA 323 TEXTBOOK",
            "images": [],
            "cost": 3600, //--> $36.00
            "location": "Palladium Hall",
            "uploadTime": "5 hours ago",
            "category": "Books",
            "tags": ["Econ", "textbook", "intro"],
            "description": "Spelling my Econ textbook (Economics principles & practices) for ECON-UA 323 class (prof.Johnson).\n\nIt is in very good condition, no marks, stains, or whatsoever. Get it at a much cheaper price!! The original price is $80 on Amazon (insane!!)",
            "counts": {
                "view": 280,
                "favorites": 39
            }
        },
        {
            "_id": "2",
            "title": "IKEA Mini Fridge",
            "images": [],
            "cost": "$80",
            "location": "Weinstein Hall",
            "uploadTime": "2 days ago"
        },
        {
            "_id": "3",
            "title": "NYU Leggings",
            "images": [],
            "cost": "$20",
            "location": "Bobst Library",
            "uploadTime": "1 week ago"
        },
        {
            "_id": "4",
            "title": "Jacquemus Hat",
            "images": [],
            "cost": "$75",
            "location": "University Hall",
            "uploadTime": "2 hours ago"
        },
        {
            "_id": "5",
            "title": "Hodu's Favorite Toy",
            "images": [],
            "cost": "$100,000",
            "location": "Tandon",
            "uploadTime": "5 minutes ago"
        },
    ]); //REMOVE THIS LATER

    useEffect(()=>{
        // API Request for Item Results
    },[selection]);

    function itemScreenNavigate(item_id){
        navigation.navigate("ItemScreen", {
            item_id: item_id
        });
    }

    return(
        <View style={styles.itemResultContainer}>
            { props.itemResultHeaderType === 'home' ? (
                <ItemResultHomeHeader selection={selection} setSelection={setSelection} />
            ) : (
                <ItemResultCategoriesHeader category={props.category} setCategory={props.setCategory} />
            )}
            <ScrollView contentContainerStyle={styles.itemResultItemCardsContainer}>
                { itemList.map((item, index)=> (
                    <TouchableOpacity style={styles.itemResultItemCardContainer} onPress={()=>itemScreenNavigate(item._id)} >
                        <ItemCard key={index} {...item} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}