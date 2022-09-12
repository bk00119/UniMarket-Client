import { useState, useEffect }from 'react';
import { ScrollView } from 'react-native';

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
    // const [category, setCategory] = useState(props.route.params.category ? props.route.params.category : null);
    const [category, setCategory] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(()=>{
        if(props.refresh){
            //RESET EVERY STATE
            setImages([]);
            props.formRef.current.resetForm();
            setTags(initialTags);
            props.route.params.category = null;
            setCategory(null);
            props.route.params.location = null;
            setLocation(null);
            props.setRefresh(false);
        }
        if(props.route.params.category != category){
            setCategory(props.route.params.category);
        }
  },[props.refresh, props.route.params.category])

    return (
        <ScrollView style={styles.sellItemScreenContainer} >
            <SellItemImageBox formRef={props.formRef} images={images} setImages={setImages} />
            <SellItemTextForm formRef={props.formRef} category={category} tags={tags} location={location} setTags={setTags} images={images} setRefresh={props.setRefresh} />
        </ScrollView>
    );
}