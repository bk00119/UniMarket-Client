import { Text } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

import * as api from '../../../../api/users';
import { styles } from "./styles";

export default function MobileUserRegister(props){
    const [nickname, setNickame] = useState(null);

    async function registerUserToDB(){
        if(nickname==null){
            alert("Please type your nickname");
            return;
        }
        try { 
            await api.createUser(props.userData)
                .then(async (response) => {
                    await SecureStore.setItemAsync('loginStatus', response.data._id);
                    props.setRegisterStatus(false);
                    props.setLoginStatus(true);
                })
        } catch (error) {
            if(error.response.status == 409) {
                console.log("ERROR: CAN'T CREATE A NEW USER");
            }
        }
    }

    function register(){
        props.userData.userName = nickname;
        registerUserToDB();
    }

    return (
        <SafeAreaView style={styles.mobileUserRegisterContainer}>
            <Text style={styles.mobileUserRegisterTitle}>Set Up Your Nickname</Text>
            <Input 
                placeholder='Enter Nickname'
                containerStyle={styles.mobileUserRegisterTextInputContainer}
                inputContainerStyle={styles.mobileUserRegisterTextInputInputContainer}
                inputStyle={styles.mobileUserRegisterTextInput}
                onChangeText={value => setNickame(value)}
            />
            <Button
                containerStyle={styles.mobileUserRegisterButtonContainer}
                buttonStyle={styles.mobileUserRegisterButton}
                titleStyle={styles.mobileUserRegisterButtonContainerText}
                title="Join"
                onPress={()=>register()}
            ></Button>
        </SafeAreaView>
    );
}