import { View, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
// import { ImageBrowser } from 'expo-image-picker-multiple'; //DOESN'T WORK ON EXPO GO
// import { MultipleImagePicker } from '@baronha/react-native-multiple-image-picker'; //DOESN'T WORK ON EXPO GO

import { styles } from './styles';

export default function SellItemImageBox(props) {
    // const [mediaPermission, setMediaPermission] = useState(ImagePicker.requestMediaLibraryPermissionsAsync()); //ADD THIS

    const pickImage = async () => {
        // if(mediaPermission !== "granted"){
        //     alert("No access to internal storage");  //EDIT THIS LATER
        // }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            allowsMultipleSelection: true,
            // selectionLimit: 0,
            // aspect: [4, 3],
            quality: 1,
        });

        // console.log(result); //REMOVE THIS

        if (!result.cancelled) {
        //    props.setImages(...props.images.append(result.uri));
            // props.setImages([result.uri]);
            
            props.setImages([result.uri, result.uri, result.uri, result.uri]) //REPLACE THIS: NEED TO TEST API WITH MULTIPLE IMAGES
        }
    };

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
                            <Image source={{ uri: image }} style={styles.sellItemUploadedImage} />
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