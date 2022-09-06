import { useState, useEffect }from 'react';
import { View } from 'react-native'
// import * as ImagePicker from 'expo-image-picker';
// import { ImageBrowser } from 'expo-image-picker-multiple'; //DOESN'T WORK ON EXPO GO
// import { MultipleImagePicker } from '@baronha/react-native-multiple-image-picker'; //DOESN'T WORK ON EXPO GO

import SellItemImageBox from '../../../components/SellItem/ImageBox/mobile';
import SellItemTextForm from '../../../components/SellItem/ItemTextForm/mobile';
import { styles } from './styles';

export default function SellItemScreen(props) {
    const [images, setImages] = useState([]);
    const initialTags = {
        tags: '',
        tagsArray: []
    }
    const [tags, setTags] = useState(initialTags);

    useEffect(()=>{
      // (async ()=> {
      //     // const mediaStatus = await ImagePicker.requestCameraPermissionsAsync();
      //     // setMediaPermission(mediaStatus.status === 'granted');
      // })();
      if(props.refresh){
          //RESET EVERY STATE
          setImages([]);
          props.formRef.current.resetForm();
          setTags(initialTags);
          props.setRefresh(false);
      }
  },[props.refresh])

    return (
        <View style={styles.sellItemScreenContainer} >
            <SellItemImageBox formRef={props.formRef} images={images} setImages={setImages} />
            <SellItemTextForm formRef={props.formRef} tags={tags} setTags={setTags} images={images} setRefresh={props.setRefresh} />
        </View>
    );
}