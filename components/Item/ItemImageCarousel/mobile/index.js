import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { View, Dimensions, Text } from 'react-native';

import { styles } from './styles';

const {width: screenWidth} = Dimensions.get('window');

export default function ItemImageCarousel(props) {
    const [imageData, setImageData] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        setImageData(props.images);
    }, []);

    const renderImage = ({item, index}, parallaxProps) => {
        return (
            <View style={styles.itemImageContainer} key={index} >
                <ParallaxImage
                    source={{uri: item}}
                    containerStyle={styles.itemImageInnerContainer}
                    style={styles.itemImage}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.itemImagePageNumberContainer}>
                    <Text style={styles.itemImagePageNumber}>{index+1} / {imageData.length}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.itemScreenItemImageContainer}>
            <Carousel
                ref={carouselRef}
                // sliderWidth={screenWidth} //suggested
                // sliderHeight={screenWidth} //suggested
                // itemWidth={screenWidth - 60} //suggested
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={imageData}
                renderItem={renderImage}
                hasParallaxImages={true}
            />
        </View>
    );
};