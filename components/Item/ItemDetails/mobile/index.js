import { ScrollView, View, Text, Image } from 'react-native';
import { Button } from '@rneui/themed';

import { styles } from './styles';
import { dateDiffInSting } from "../date_difference";

export default function ItemDetails(props){
    const postDate = new Date(props.itemData.uploadTime);
    const currDate = new Date();

    return (
        <View style={styles.itemScreenItemDetailsContainer}>
            <Text style={styles.itemScreenItemTitle}>{props.itemData.title}</Text>
            <Text style={styles.itemScreenItemCost}>${(props.itemData.cost/100).toFixed(2)}</Text>
            <View style={styles.itemScreenDetailsTopContainer}>
                <View style={styles.itemScreenDetailsTopLeftContainer}>
                    <Text style={styles.itemScreenItemDetailsTopLeftText}>{props.itemData.location}</Text>
                    <Text style={styles.itemScreenItemDetailsTopLeftText}>•</Text>
                    <Text style={styles.itemScreenItemDetailsTopLeftText}>{dateDiffInSting(currDate, postDate)}</Text>
                </View>
                <View style={styles.itemScreenDetailsTopRightContainer}>
                    <View style={styles.itemScreenItemDetailsTopRightInformationContainer}>
                        <Image
                            source={require('../icons/eye.png')}
                            style={styles.itemSCreenItemCountsIcon}
                        />
                        <Text style={styles.itemScreenItemViewCounts}>{props.itemData.counts.view}</Text>
                    </View>
                    <View style={styles.itemScreenItemDetailsTopRightInformationContainer}>
                        <Image
                            source={require('../icons/heart_filled.png')}
                            style={styles.itemSCreenItemCountsIcon}
                        />
                        <Text style={styles.itemScreenItemFavoritesCounts}>{props.itemData.counts.favorites}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.itemScreenItemTagContainer}>
                <Button 
                    title={props.itemData.category}
                    buttonStyle={styles.itemScreenItemTagButton}
                    titleStyle={styles.itemScreenItemTagButtonTitle}
                    // onPress={()=>props.setCategory(null)} //navigate to item search 
                />
                { props.itemData.tags?.map((tag, index)=>(
                    <Button
                        title={tag}
                        key={index}
                        containerStyle={styles.itemScreenItemTagButtonContainer}
                        buttonStyle={styles.itemScreenItemTagButton}
                        titleStyle={styles.itemScreenItemTagButtonTitle}
                        // onPress={()=>props.setCategory(null)}
                    />
                ))}
            </View>
            <View style={styles.itemScreenItemDescriptionContainer}>
                <Text style={styles.itemScreenItemDescription}>{props.itemData.description}</Text>
            </View>
        </View>
    )
}