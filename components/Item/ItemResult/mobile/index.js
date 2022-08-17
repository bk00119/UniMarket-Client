import { View, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import ItemResultHomeHeader from '../ItemResultHeaders/ItemResultHomeHeader/mobile';
import ItemResultCategoriesHeader from '../ItemResultHeaders/ItemResultCategoriesHeader/mobile';
import ItemCard from '../ItemCard/mobile';
import { styles } from './styles';
import * as api from '../../../../api/items';

export default function ItemResult(props){
    const navigation = useNavigation();
    const [selection, setSelection] = useState(0);
    const [loadedNumItems, setLoadedNumItems] = useState(0);
    const [itemList, setItemList] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(()=>{
        if(itemList==null){
            loadItems();
        }
        if(isRefreshing){
            console.log('refreshing');
            setItemList(null);
            setLoadedNumItems(0);
            loadItems();
            setIsRefreshing(false);
        }
    },[selection, isRefreshing]);

    async function loadItems(){
        const newLoadedItems = await api.getItems(loadedNumItems);
        if(itemList==null){
            setItemList(newLoadedItems.data);
            setLoadedNumItems(newLoadedItems.data.length);
        } else {
            setItemList(itemList.concat(newLoadedItems.data));
            setLoadedNumItems(loadedNumItems+newLoadedItems.data.length);
        }
    }
    function itemScreenNavigate(item_id){
        navigation.navigate("ItemScreen", {
            item_id: item_id
        });
    }

    function renderItem(props){
        return (
            <TouchableOpacity style={styles.itemResultItemCardContainer} onPress={()=>itemScreenNavigate(props.item._id)} >
                <ItemCard {...props.item} />
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.itemResultContainer}>
            { props.itemResultHeaderType === 'home' ? (
                <ItemResultHomeHeader selection={selection} setSelection={setSelection} />
            ) : (
                <ItemResultCategoriesHeader category={props.category} setCategory={props.setCategory} />
            )}
            {itemList!=null ? (
                <FlatList
                onEndReached={()=> {
                    loadItems();
                    console.log(loadedNumItems);
                    console.log(itemList.length);
                }}
                onRefresh={()=> {
                    setIsRefreshing(true);
                }}
                refreshing={isRefreshing}
                data={itemList ? itemList : []}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.itemResultListContainer}
                keyExtractor={item => item.id}
            />
            ):null}
        </View>
    );
}