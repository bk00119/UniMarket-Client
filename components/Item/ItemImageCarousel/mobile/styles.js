import { Dimensions, Platform, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    itemScreenItemImageContainer: {
        flex: 1,
    },
    itemImageContainer: {
        // width: screenWidth - 60, //suggested
        // height: screenWidth - 60, //suggested
        width: screenWidth,
        height: screenWidth,
    },
    itemImageInnerContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevents a random Android rendering issue
        backgroundColor: '#F5F5F5',
    },
    itemImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
    itemImagePageNumberContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        right: 0,
        bottom: 0,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 10
    },
    itemImagePageNumber: {
        color: '#FFF',
        fontSize: 18
    }
});