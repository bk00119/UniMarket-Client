import { ScrollView, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from '@rneui/themed';

import ItemImageCarousel from '../../../components/Item/ItemImageCarousel/mobile';
import ItemDetails from '../../../components/Item/ItemDetails/mobile';
import { styles } from './styles';

import * as api from "../../../api/items";

export default function ItemScreen(props){
    const [itemData, setItemData] = useState(null);
    // const item_id = props.route.params.item_id //CURRENT: PASSING IN INDEX, NOT ITEM_ID
    const item_id = '62fb33de621e5f0e64be44b4'; //REMOVE THIS

    useEffect(()=>{
        if(itemData==null){
            api.getItemForItemPage(item_id)
                .then((res)=>{
                    setItemData(res.data)
                })
        }
    },[])

    return (
        <ScrollView style={styles.itemScreenContainer}>
            {itemData!=null ? (
                <View style={styles.itemScreenContainer}>
                <ItemImageCarousel images={itemData.images} />

                <ItemDetails itemData={itemData} />
                </View>
            ):(<View></View>)}
        </ScrollView>
    );
}