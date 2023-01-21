import { View, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import { styles } from './styles';

export default function SellItemImageBox(props) {

    const pickImage = async () => {
        // //Expo App doesn't work with react-native-image-crop-picker
        let result = await ImagePicker.openPicker({
            multiple: true,
        });
        if (result) {
            props.setImages(result);
            // console.log(result); //sourceURL
        }
    }

    function removeImage(imageIndex){
        props.setImages(props.images.filter((image, index) => {
            return index != imageIndex;
        }))
    }

    return (
        // <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View>
                <ScrollView horizontal={true} style={styles.sellItemScreenImageBoxContainer} >
                    <TouchableOpacity 
                        onPress={pickImage} 
                        style={styles.sellItemUploadImageButton}
                    >
                        <Image
                            source={require('../camera.png')}
                            style={styles.sellItemUploadImageButtonIcon}
                        />
                    </TouchableOpacity>
                    {props.images.length>0 && props.images.map((image, index) => (
                        <View key={index}>
                            <Image source={{ uri: image.sourceURL }} style={styles.sellItemUploadedImage} />
                            <TouchableOpacity
                                onPress={()=>removeImage(index)}
                                style={styles.sellItemUploadedImageRemoveButton}
                            >
                                <Image source={require('../close.png')} style={styles.sellItemUploadedImageRemoveButtonIcon} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        // </TouchableWithoutFeedback>
    );
}