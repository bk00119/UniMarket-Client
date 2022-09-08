import { View, TextInput, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import { Formik } from 'formik';
import TagInput from 'react-native-tags-input';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function ItemTextForm(props) {
    const navigation = useNavigation();
    async function uploadItem (textFormValues){
        if(props.images.length<3){
            return alert("You need at least 3 photos of the item");
        }
        var itemData = textFormValues;
        itemData.images = props.images;
        itemData.tags = props.tags.tagsArray;
        itemData.price = parseInt(itemData.price*100);

        //REMOVE THIS LATER
        // itemData.category = "Books";
        itemData.category = props.category;
        itemData.location = "Bobst Library";
        console.log(itemData);
        //

        //API POST (AWAIT)
        //IMAGE POST (GET IDS) --> ITEM DATA POST

        props.setRefresh(true);
        navigation.navigate("My");
    }

    function setCategory() {
        navigation.navigate('SellItemCategoryScreen');
    }

    function updateTag(tag) {
        if(props.tags.tagsArray.length>2){
            alert("You can only put 3 tags");
        } else {
            props.setTags(tag);   
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <SafeAreaView  style={styles.itemTextFormContainer} >
            <Formik
                    initialValues={{
                        title: '',
                        category: '',
                        price: '',
                        description: '',
                    }}
                    onSubmit={values => uploadItem(values)}
                    innerRef={props.formRef}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.sellItemTextFormContainer}>
                            <TextInput
                                style={styles.sellItemTextInput}
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                placeholder="Title"
                                value={values.title}
                                placeholderTextColor="#7D7D7D"
                                // value={props.formRef.current.values.title}
                            />
                            {/* <TextInput
                                style={styles.sellItemTitleTextInput}
                                onChangeText={handleChange('category')}
                                onBlur={handleBlur('category')}
                                placeholder="Category"
                                value={values.category}
                                type={"number"}
                            /> */}
                            <TouchableOpacity 
                                style={styles.sellItemCategoryInputContainer} 
                                activeOpacity={1} 
                                onPress={setCategory}
                            >
                                {props.category==null ? (
                                    <Text style={styles.sellItemCategoryInputText}>
                                        Category
                                    </Text>
                                ) : (
                                    <Text style={styles.sellItemCategoryInputTextBold}>
                                        {props.category}
                                    </Text>
                                )}
                                <Image
                                    source={require('../chevron-right.png')}
                                    style={styles.sellItemCategoryInputIcon}
                                />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.sellItemTextInput}
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                placeholder="$ Price"
                                value={values.price}
                                keyboardType="numeric"
                                placeholderTextColor="#7D7D7D"
                            />
                            <TagInput
                                // updateState={props.setTags}
                                updateState={(tag)=>updateTag(tag)}
                                tags={props.tags}
                                placeholder="# Tags (up to 3)"
                                containerStyle={styles.sellItemTagsContainer}
                                inputContainerStyle={styles.sellItemTagsInputContainer}
                                inputStyle={styles.sellItemTagsInput}
                                tagStyle={styles.sellItemTags}
                                placeholderTextColor="#7D7D7D" 
                            />
                            {/* <TextInput
                                style={styles.sellItemTitleTextInput}
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                placeholder="Location"
                                value={values.location}
                            /> */}
                            <TextInput
                                style={styles.sellItemDescriptionTextInput}
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                placeholder={`Description\n\nPlease include several photos of the product, the year of purchase, the sense of use, and the information required by the buyer. You can reduce inquiries and sell them more easily. (10 characters or more)`}
                                value={values.description}
                                multiline = {true}
                                numberOfLines = {3}
                                placeholderTextColor="#7D7D7D"
                            />
                        </View>
                    )}
                </Formik>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}